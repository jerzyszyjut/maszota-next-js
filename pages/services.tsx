import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { CldImage } from 'next-cloudinary';
import ShadedBackgroundImage from '@/components/ShadedBackgroundImage/ShadedBackgroundImage';

const Services = () => {
  return (
    <PageWrapper>
      <article className='relative h-96'>
        <ShadedBackgroundImage image="rne41sebyu5tfaca58bn" />
      </article>
      <article className='relative h-96'>
        <ShadedBackgroundImage image="v21qaqr9seckgh4oawci" />
      </article>
      <article className='relative h-96'>
        <ShadedBackgroundImage image="psx97tzrqyzmiwjvyzis" />
      </article>
      <article className='relative h-96'>
        <ShadedBackgroundImage image="wl1vhwafrwsbnholh0md" />
      </article>
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

export default Services;
