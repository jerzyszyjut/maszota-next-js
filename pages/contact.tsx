import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageWrapper from '@/components/PageWrapper/PageWrapper';

const Contact = () => {
  return (
    <PageWrapper>
      <div>
        <h1>Contact</h1>
      </div>
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

export default Contact;
