import styles from './ShadedBackgroundImage.module.scss';
import { CldImage } from 'next-cloudinary';

type ShadedBackgroundImageProps = {
  image: string;
  opacity?: number;
}

const ShadedBackgroundImage = ({ image, opacity }: ShadedBackgroundImageProps) => {
  opacity = opacity || 0.8;
  return (
    <>
      <div className={styles.shade} style={
        {
          backgroundColor: `rgba(255, 255, 255, ${opacity})`
        }
      }></div>
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

