import { useTranslation } from 'next-i18next';
import { FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'
import styles from './Footer.module.scss';


const Footer = () => {
  const { t } = useTranslation(['footer']);


  return (
    <footer className={`${styles.footer} w-full bg-dark-gray flex flex-col md:flex-row text-white items-center md:justify-center md:px-42`}>
      <article>
        <FaPhone />
        <div>
          <h2>{t('footer:callUs')}</h2>
          <div>
            <a href="tel:+48 577 509 009">
              +48 577 509 009
            </a>
          </div>
        </div>
      </article>
      <article>
        <FaEnvelope />
        <div>
          <h2>{t('footer:emailUs')}</h2>
          <div>
            <a href="mailto:monikamaszota@yahoo.com">
              monikamaszota@yahoo.com
            </a>
          </div>
        </div>
      </article>
      <article className={styles.social}>
        <div>
          <h2>
            {t('footer:findUs')}
          </h2>
          <div className='flex'>
            <a href='https://www.facebook.com/maszota.prof.car.spraying/' target='_blank'>
              <FaFacebook />
            </a>
            <a href='https://www.youtube.com/channel/UCZrEktJWgY2PCwduGOjVZOw' target='_blank'>
              <FaYoutube />
            </a>
            <a href='https://www.instagram.com/maszota_prof_car_spraying/' target='_blank'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </article>
    </footer >
  );
}

export default Footer
