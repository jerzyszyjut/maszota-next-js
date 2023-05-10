import { useTranslation } from 'next-i18next';
import { FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const { t } = useTranslation(['footer']);


  return (
    <footer className="w-full bg-dark-gray flex flex-col md:flex-row text-white">
      <article>
        <FaPhone className="text-white" />
        <p>
          <h2>{t('footer:callUs')}</h2>
          <div>Tel: +48 577 509 009</div>
        </p>
      </article>
      <article>
        <FaEnvelope className="text-white" />
        <p>
          <h2>{t('footer:emailUs')}</h2>
          <div>
            <a href="mailto:monikamaszota@yahoo.com">
              monikamaszota@yahoo.com
            </a>
          </div>
        </p>
      </article>
      <article className="text-white">
        <p>
          <h2>
            {t('footer:findUs')}
          </h2>
          <FaFacebook className="text-white" />
          <FaYoutube className="text-white" />
          <FaInstagram className="text-white" />
        </p>
      </article>
    </footer >
  );
}

export default Footer
