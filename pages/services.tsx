import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import ShadedBackgroundImage from '@/components/ShadedBackgroundImage/ShadedBackgroundImage';
import { useTranslation } from 'next-i18next'

const services = [
  {
    id: "wl1vhwafrwsbnholh0md",
    name: "services:personalization",
  },
  {
    id: "rne41sebyu5tfaca58bn",
    name: "services:painting",
  },
  {
    id: "IMG_8384_vqcrtf",
    name: "services:tinsmithing",
  },
  {
    id: "image4_fnrfvm",
    name: "services:detailing",
  }
]

const Services = () => {
  const { t } = useTranslation(['services']);

  return (
    <PageWrapper>
      {
        services.map(({ id, name }) => (
          <div className='relative h-96 flex justify-center items-center' key={id}>
            <ShadedBackgroundImage image={id} opacity={0.5} />
            <h1 className="text-4xl uppercase font-bold">{t(name)}</h1>
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
