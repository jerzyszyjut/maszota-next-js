import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Partners from "@/components/Partners/Partners";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const PartnersPage = () => {
  return (
    <PageWrapper>
      <Partners />
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'navigation-bar', 'home-page', 'footer', 'services', 'partners'])),
  },
})

export default PartnersPage;