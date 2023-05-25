//@ts-nocheck
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './SliderGallery.module.scss';
import Image from 'next/image';


const SliderGallery = ({ images }: { images: ImageProps[] }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {
          images.map(({ id, public_id, format, blurDataUrl }) => (
            <div className={styles.embla__slide} key={id}>
              <Image
                alt="Car"
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2000/${public_id}.${format}`}
                width={2000}
                height={2000}
              />
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default SliderGallery
