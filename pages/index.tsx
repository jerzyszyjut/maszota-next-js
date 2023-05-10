import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import { FaRegStar, FaMedal, FaSmile } from 'react-icons/fa';
import SliderGallery from '@/components/SliderGallery/SliderGallery';
import CarImage from '@/assets/car.jpg';

const marketingSections = [
    {
        icon: FaRegStar,
        header: 'home-page:qualityHeader',
        content: 'home-page:qualityContent'
    },
    {
        icon: FaMedal,
        header: 'home-page:experienceHeader',
        content: 'home-page:experienceContent'
    },
    {
        icon: FaSmile,
        header: 'home-page:satisfactionHeader',
        content: 'home-page:satisfactionContent'
    }
]

const Home = () => {
    const { t } = useTranslation(['common', 'home-page']);

    return (
        <>
            <Head>
                <title>{t('common:site-title')}</title>
                <meta name="description" content={t('common:site-description') ?? ''} />
                <meta name="keywords" content={t('common:site-keywords') ?? ''} />
                <meta name="og:title" content={t('common:site-title') ?? ''} />
                <meta name="og:description" content={t('common:site-description') ?? ''} />
                <meta name="og:image" content={t('common:site-image') ?? ''} />
                <meta name="og:url" content={t('common:site-url') ?? ''} />
                <meta name="og:site_name" content={t('common:site-title') ?? ''} />
                <meta name="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={t('common:site-title') ?? ''} />
                <meta name="twitter:description" content={t('common:site-description') ?? ''} />
                <meta name="twitter:image" content={t('common:site-image') ?? ''} />
            </Head>
            <main>
                <NavigationBar />
                <SliderGallery />

                <section className='bg-gray w-full flex flex-col justify-around py-32 px-56'>
                </section>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({
    locale,
}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common', 'navigation-bar', 'home-page'])),
    },
})

export default Home
