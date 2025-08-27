import { useTranslation } from "next-i18next";
import Socials from "@/components/Socials/Socials";
import Certificates from "@/components/Certificates/Certificates";
import { ImageProps } from "@/utils/types";
import styles from "./AboutUs.module.scss";

interface AboutUsProps {
  videos: any[];
  certificates: ImageProps[];
}

const AboutUs = ({ videos, certificates }: AboutUsProps) => {
  const { t } = useTranslation(["about-us"]);

  return (
    <div className={styles.aboutUs} id="about-us">
      <div className={styles.sectionHeader}>
        <h1 className={styles.mainTitle}>{t("about-us:about-us")}</h1>
      </div>

      <div>
        <Certificates certificates={certificates} />
      </div>

      <div>
        <Socials videos={videos} />
      </div>
    </div>
  );
};

export default AboutUs;
