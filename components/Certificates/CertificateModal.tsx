import { ReactNode } from "react";
import styles from "./CertificateModal.module.scss";

interface CertificateModalProps {
  children: ReactNode;
  onClose: () => void;
}

const CertificateModal = ({ children, onClose }: CertificateModalProps) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default CertificateModal;
