import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import ContactBackgroundImage from '@/assets/contact/contact-background.jpg';
import Image from 'next/image';
import styles from '@/styles/contact.module.scss';
import { useTranslation } from 'next-i18next';
import ShadedBackgroundImage from '@/components/ShadedBackgroundImage/ShadedBackgroundImage';

const Contact = () => {
  const { t } = useTranslation(['contact']);

  return (
    <PageWrapper>
      <article className={`${styles.contactArticle} w-full relative`}>
        <ShadedBackgroundImage image="lriu6jjr3164wb4xm9pd" />
        <h1 className="text-4xl font-bold text-center uppercase">
          {t('contact:contactUs')}
        </h1>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center">
          <div className={`${styles.contact} w-full flex flex-col md:flex-row justify-center items-center`}>
            <div className="text-xl font-bold text-center uppercase">
              <h2>
                {t('contact:phone')}
              </h2>
              <p>
                <a href="tel:+48 577 509 009">
                  +48 577 509 009
                </a>
              </p>
            </div>
            <div className="text-xl font-bold text-center uppercase">
              <h2>
                {t('contact:email')}
              </h2>
              <p>
                <a href="mailto:monikamaszota@yahoo.com">
                  monikamaszota@yahoo.com
                </a>
              </p>
            </div>
            <div className="text-xl font-bold text-center uppercase">
              <h2>
                {t('contact:address')}
              </h2>
              <p>
                84-351 Wilkowo Nowowiejskie 17
              </p>
            </div>
          </div>
        </div>
      </article>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2311.3930566260597!2d17.758524!3d54.59706800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48a8603e00283f52!2sMASZOTA%20PROFESSIONAL%20CAR%20SPRAYING!5e0!3m2!1spl!2spl!4v1632591171461!5m2!1spl!2spl" width="100%" height="650" style={{ border: '0' }} loading="eager"></iframe>
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'navigation-bar', 'home-page', 'footer', 'contact'])),
  },
})

export default Contact;
