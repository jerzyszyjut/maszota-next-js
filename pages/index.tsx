import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SliderGallery from '@/components/SliderGallery/SliderGallery';
import PageWrapper from '@/components/PageWrapper/PageWrapper';

const Home = () => {
    return (
        <PageWrapper>
            <SliderGallery />
        </PageWrapper>
    )
}

export const getStaticProps: GetStaticProps = async ({
    locale,
}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common', 'navigation-bar', 'home-page', 'footer'])),
    },
})


export default Home
