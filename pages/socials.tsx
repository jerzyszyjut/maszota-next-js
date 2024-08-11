import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Socials from "@/components/Socials/Socials";
import axios from "axios";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SocialsPage = ({ videos }: { videos: any[] }) => {
  return (
    <PageWrapper>
      <Socials videos={videos} />
    </PageWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const channelId = "UCZrEktJWgY2PCwduGOjVZOw";
  const maxResults = 25;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
    );

    return {
      props: {
        videos: response.data.items,
        ...(await serverSideTranslations(locale ?? "en", [
          "common",
          "navigation-bar",
          "home-page",
          "footer",
          "services",
          "partners",
          "socials",
        ])),
      },
    };
  } catch (error) {
    console.error("Error fetching videos: ", error);
    return {
      props: {
        videos: [],
        ...(await serverSideTranslations(locale ?? "en", [
          "common",
          "navigation-bar",
          "home-page",
          "footer",
          "services",
          "partners",
          "socials",
        ])),
      },
    };
  }
};

export default SocialsPage;
