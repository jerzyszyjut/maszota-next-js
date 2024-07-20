import { CldImage } from "next-cloudinary";
import styles from "./Partners.module.scss";
import { useTranslation } from "next-i18next";

const partners = [
  {
    id: "logo-debeer-refinish_nqd0jf",
    name: "DeBeeer",
    text: "partners:debeer",
  },
  {
    id: "ValsparAutomotiveLogoHor_nefcna",
    name: "Valspar Automotive",
    text: "partners:valspar",
  },
  {
    id: "koch-chemie_qupv3q",
    name: "Koch-Chemie",
    text: "partners:kochchemie",
  },
  {
    id: "duxone-logo-4C89910D14-seeklogo.com_uutkqm.png",
    name: "Duxone",
    text: "partners:duxone",
  },
  {
    id: "ukleja",
    name: "Ukleja",
    text: "partners:ukleja",
  },
  {
    id: "kovax",
    name: "Kovax",
    text: "partners:kovax",
  },
  {
    id: "indasa",
    name: "Indasa",
    text: "partners:indasa",
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
                        {t(partner.text)}
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
                        {t(partner.text)}
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
