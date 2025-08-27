import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SliderGallery from "@/components/SliderGallery/SliderGallery";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { ImageProps } from "@/utils/types";
import cloudinary from "@/utils/cloudinary";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import Partners from "@/components/Partners/Partners";
import AboutUs from "@/components/AboutUs/AboutUs";
import { useTranslation } from "next-i18next";
import ShadedBackgroundImage from "@/components/ShadedBackgroundImage/ShadedBackgroundImage";
import BalticRace from "@/components/BalticRacePartners/BalticRace";
import axios from "axios";

const Home = ({
  images,
  certificates,
  videos,
}: {
  images: ImageProps[];
  certificates: ImageProps[];
  videos: any[];
}) => {
  const { t } = useTranslation(["services"]);

  return (
    <PageWrapper>
      <BalticRace />
      <SliderGallery images={images} />
      <div className="relative flex justify-center items-center flex-col py-40 px-4">
        <ShadedBackgroundImage
          image={"IMG_1433_sk7jnc"}
          opacity={0.8}
          height={2000}
          width={2000}
        />
        <h1 className="text-4xl uppercase font-bold py-8 text-center">
          {t("services:personalization")}
        </h1>
        <div className="flex flex-col items-center justify-center md:w-7/12 py-8 text-center">
          {[1, 2, 3].map((page) => (
            <p key={page} className="text-xl py-4">
              {t(`services:personalization-parapraph-${page}`)}
            </p>
          ))}
        </div>
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="about-us">
        <AboutUs videos={videos} certificates={certificates} />
      </div>
    </PageWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER_SLIDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  // Fetch certificates - assuming they're in a "certificates" folder
  const certificatesResults = await cloudinary.v2.search
    .expression(`folder:certificates/*`)
    .sort_by("public_id", "desc")
    .max_results(100)
    .execute();

  // Fetch YouTube videos
  let videos: any[] = [];
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const channelId = "UCZrEktJWgY2PCwduGOjVZOw";
  const maxResults = 25;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
    );
    videos = response.data.items;
  } catch (error) {
    console.error("Error fetching videos: ", error);
    videos = [];
  }

  let reducedResults: ImageProps[] = [];
  let reducedCertificates: ImageProps[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  let j = 0;
  for (let result of certificatesResults.resources) {
    reducedCertificates.push({
      id: j,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    j++;
  }

  const blurImagePromises = results.resources?.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  const certificateBlurPromises = certificatesResults.resources?.map(
    (image: ImageProps) => {
      return getBase64ImageUrl(image);
    }
  );
  const certificatesWithBlurDataUrls = await Promise.all(
    certificateBlurPromises
  );

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  for (let i = 0; i < reducedCertificates.length; i++) {
    reducedCertificates[i].blurDataUrl = certificatesWithBlurDataUrls[i];
  }

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "navigation-bar",
        "home-page",
        "footer",
        "partners",
        "services",
        "about-us",
        "socials",
      ])),
      images: reducedResults,
      certificates: reducedCertificates,
      videos: videos,
    },
  };
};

export default Home;
