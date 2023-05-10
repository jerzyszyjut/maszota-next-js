import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import SliderGallery from '@/components/SliderGallery/SliderGallery';
import MarketingSection from '@/components/MarketingSection/MarketingSection';
import Footer from '@/components/Footer/Footer';

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
                <MarketingSection />
            </main>
            <Footer />
        </>
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
