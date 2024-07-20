import { CldImage } from "next-cloudinary";
import styles from "./Influencers.module.scss";
import { useTranslation } from "next-i18next";

const Influencers = () => {
  const { t } = useTranslation(["partners"]);

  return (
    <div className={styles.background}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NfImLQPO9uE?si=7pQ9PU9WJX_iLRMl"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Influencers;
