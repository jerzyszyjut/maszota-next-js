import { useTranslation } from 'next-i18next'
import Head from 'next/head';
import Footer from '@/components/Footer/Footer';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import { useRouter } from 'next/router';


const stripedPages = [
  '/services',
  '/about',
  '/contact',
];

type PageWrapperProps = {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { t } = useTranslation(['common', 'home-page']);
  const router = useRouter();
  const isStriped = stripedPages.includes(router.pathname);

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
        <NavigationBar stripe={isStriped} />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default PageWrapper
