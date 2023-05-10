import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './SliderGallery.module.scss';
import FirstCarImage from '@/assets/cars/1.jpg';
import SecondCarImage from '@/assets/cars/2.jpg';
import ThirdCarImage from '@/assets/cars/3.jpg';
import Image from 'next/image';


const SliderGallery = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])

  const photos = [
    {
      src: FirstCarImage,
      alt: '1',
    },
    {
      src: SecondCarImage,
      alt: '2',
    },
    {
      src: ThirdCarImage,
      alt: '3',
    },
  ]

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {photos.map((photo, index) => (
          <div className={styles.embla__slide} key={index}>
            <Image width={1000} height={100} src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>

  )
}

export default SliderGallery
