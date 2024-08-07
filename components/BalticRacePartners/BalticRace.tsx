import { CldImage } from "next-cloudinary";
import styles from "./BalticRace.module.scss";
import { useTranslation } from "next-i18next";

const BalticRace = () => {
  const { t } = useTranslation(["partners"]);

  return (
    <div
      className={styles.background}
      onClick={() => window.open("https://balticrace.eu/", "_blank")}
    >
      <div className={styles.background_polygon_1} />
      <div className={styles.background_polygon_2} />
      <div className="flex items-center justify-center flex-col py-4 relative">
        <h1 className="text-white text-4xl font-bold text-center p-4 uppercase">
          {t("baltic-race")}
        </h1>
        <CldImage
          key={"logo_baltic_race"}
          width={400}
          height={200}
          src={"logo_baltic_race"}
          alt={"Baltic race logo"}
        />
      </div>
    </div>
  );
};

export default BalticRace;
