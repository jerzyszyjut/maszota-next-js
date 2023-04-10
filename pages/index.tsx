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
