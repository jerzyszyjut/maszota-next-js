import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SliderGallery from '@/components/SliderGallery/SliderGallery';
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { ImageProps } from '@/utils/types';
import cloudinary from '@/utils/cloudinary';
import getBase64ImageUrl from '@/utils/generateBlurPlaceholder';
import Partners from '@/components/Partners/Partners';

const Home = ({ images }: { images: ImageProps[] }) => {
    return (
        <PageWrapper>
            <SliderGallery images={images} />
            <Partners />
        </PageWrapper>
    )
}

export const getStaticProps: GetStaticProps = async ({
    locale,
}) => {
    const results = await cloudinary.v2.search
        .expression(`folder:${process.env.CLOUDINARY_FOLDER_SLIDER}/*`)
        .sort_by('public_id', 'desc')
        .max_results(400)
        .execute()
    let reducedResults: ImageProps[] = []

    let i = 0
    for (let result of results.resources) {
        reducedResults.push({
            id: i,
            height: result.height,
            width: result.width,
            public_id: result.public_id,
            format: result.format,
        })
        i++
    }

    const blurImagePromises = results.resources?.map((image: ImageProps) => {
        return getBase64ImageUrl(image)
    })
    const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

    for (let i = 0; i < reducedResults.length; i++) {
        reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
    }

    return {
        props: {
            ...(await serverSideTranslations(locale ?? 'en', ['common', 'navigation-bar', 'home-page', 'footer', 'partners'])),
            images: reducedResults,
        }
    }
}

export default Home
