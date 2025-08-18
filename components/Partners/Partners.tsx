import { CldImage } from "next-cloudinary";
import styles from "./Partners.module.scss";
import { useTranslation } from "next-i18next";
import { Trans } from "react-i18next";

const partners = [
  {
    id: "axalta",
    name: "Axalta",
    text: "partners:axalta",
  },
  {
    id: "cromax",
    name: "Cromax",
    text: "partners:cromax",
  },
  {
    id: "indasa",
    name: "Indasa",
    text: "partners:indasa",
  },
  {
    id: "csv",
    name: "CSV",
    text: "partners:csv",
  },
  {
    id: "kovax",
    name: "Kovax",
    text: "partners:kovax",
  },
  {
    id: "ngenco",
    name: "Ngenco",
    text: "partners:ngenco",
  },
  {
    id: "logo-debeer-refinish_nqd0jf",
    name: "DeBeeer",
    text: "partners:debeer",
  },
  {
    id: "duxone-logo-4C89910D14-seeklogo.com_uutkqm.png",
    name: "Duxone",
    text: "partners:duxone",
  },
];

const Partners = () => {
  const { t } = useTranslation(["partners"]);

  return (
    <div className={styles.partners}>
      <div className="partners__container flex items-center justify-center flex-col py-16">
        <div className="partners__title flex items-center flex-col">
          <h2 className="text-7xl uppercase text-center">
            {t("partners:ourPartners")}
          </h2>
          <p className="text-2xl md:w-1/2 py-8 text-center">
            {t("partners:ourPartnersText")}
          </p>
        </div>
        <div className="partners__content">
          <div className="partners__content__item">
            {partners.map((partner, index) => {
              return (
                <div
                  className="flex justify-center items-center flex-col md:flex-row py-8"
                  key={index}
                >
                  {index % 2 === 0 ? (
                    <>
                      <h3
                        className="md:w-1/3 p-8 order-1 md:order-none"
                        key={index}
                      >
                        <Trans i18nKey={partner.text} />
                      </h3>
                      <CldImage
                        key={partner.id}
                        src={partner.id}
                        width={300}
                        height={300}
                        alt={partner.name}
                      />
                    </>
                  ) : (
                    <>
                      <CldImage
                        key={partner.id}
                        src={partner.id}
                        width={300}
                        height={300}
                        alt={partner.name}
                      />
                      <h3 className="md:w-1/3 p-8 md:order-1" key={index}>
                        <Trans i18nKey={partner.text} />
                      </h3>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
