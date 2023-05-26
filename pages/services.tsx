import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import ShadedBackgroundImage from '@/components/ShadedBackgroundImage/ShadedBackgroundImage';
import { useTranslation } from 'next-i18next'

const services = [
  {
    id: "IMG_7876_rqsy90",
    name: "services:personalization",
    paragraph: ((page: number) => `services:personalization-parapraph-${page}`),
  },
  {
    id: "311326145_441131041435879_2020367255377143095_n_zir3fd",
    name: "services:painting",
    paragraph: ((page: number) => `services:painting-parapraph-${page}`),
  },
  {
    id: "IMG_8384_wysjps",
    name: "services:tinsmithing",
    paragraph: ((page: number) => `services:tinsmithing-parapraph-${page}`),
  },
  {
    id: "image4_fnrfvm",
    name: "services:detailing",
    paragraph: ((page: number) => `services:detailing-parapraph-${page}`),
  }
]

const Services = () => {
  const { t } = useTranslation(['services']);

  return (
    <PageWrapper>
      {
        services.map(({ id, name, paragraph }) => (
          <div className='relative flex justify-center items-center flex-col py-12 px-4' key={id}>
            <ShadedBackgroundImage image={id} opacity={0.6} />
            <h1 className="text-4xl uppercase font-bold py-8 text-center">{t(name)}</h1>
            <div className='flex flex-col items-center justify-center md:w-7/12 py-8 text-center'>
              {
                [1, 2, 3].map((page) => (
                  <p key={page} className="text-xl py-4">{t(paragraph(page))}</p>
                ))
              }
            </div>
          </div>
        ))
      }
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'navigation-bar', 'home-page', 'footer', 'services'])),
  },
})

export default Services;
