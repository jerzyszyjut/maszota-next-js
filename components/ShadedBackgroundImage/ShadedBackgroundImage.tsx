import styles from './ShadedBackgroundImage.module.scss';
import { CldImage } from 'next-cloudinary';

type ShadedBackgroundImageProps = {
  image: string;
}

const ShadedBackgroundImage = ({ image }: ShadedBackgroundImageProps) => {
  return (
    <>
      <div className={styles.shade}></div>
      <CldImage
        src={image}
        alt="Background image"
        width="1920"
        height="1080"
        className={styles.backgroundImage}
      />
    </>
  );
};

export default ShadedBackgroundImage;

