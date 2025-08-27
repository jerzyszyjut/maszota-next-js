import { useState } from "react";
import { useTranslation } from "next-i18next";
import CertificateModal from "./CertificateModal";
import { ImageProps } from "@/utils/types";
import styles from "./Certificates.module.scss";

interface CertificatesProps {
  certificates: ImageProps[];
}

const Certificates = ({ certificates }: CertificatesProps) => {
  const { t } = useTranslation(["about-us"]);
  const [currentImage, setCurrentImage] = useState<ImageProps | null>(null);

  const openModal = (image: ImageProps) => {
    setCurrentImage(image);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  return (
    <div className={styles.certificates}>
      <h2 className={styles.title}>{t("about-us:certificates")}</h2>
      <p className={styles.description}>
        {t("about-us:certificates-description")}
      </p>
      <div className={styles.certificatesGrid}>
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className={styles.certificateItem}
            onClick={() => openModal(certificate)}
          >
            <img
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_400/${certificate.public_id}.${certificate.format}`}
              alt={`Certificate ${certificate.id}`}
              className={styles.certificateImage}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {currentImage && (
        <CertificateModal onClose={closeModal}>
          <img
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_800/${currentImage.public_id}.${currentImage.format}`}
            alt={`Certificate ${currentImage.id}`}
            className={styles.modalImage}
          />
        </CertificateModal>
      )}
    </div>
  );
};

export default Certificates;
