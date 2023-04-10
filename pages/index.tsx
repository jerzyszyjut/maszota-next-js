import NavigationBar from '@/components/NavigationBar';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head';

const Home = () => {
    const { t } = useTranslation(['common']);

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
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({
    locale,
}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', ["common", "navigation-bar"])),
    },
})

export default Home
