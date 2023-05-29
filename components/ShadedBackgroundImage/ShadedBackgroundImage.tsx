import styles from './ShadedBackgroundImage.module.scss';
import { CldImage } from 'next-cloudinary';

type ShadedBackgroundImageProps = {
  image: string;
  opacity?: number;
  height?: number;
  width?: number;
}

const ShadedBackgroundImage = ({ image, opacity, height, width }: ShadedBackgroundImageProps) => {
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
        width={width ?? 1920}
        height={height ?? 1080}
        className={styles.backgroundImage}
      />
    </>
  );
};

export default ShadedBackgroundImage;

