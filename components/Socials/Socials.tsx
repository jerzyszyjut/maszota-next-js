import styles from "./Socials.module.scss";
import { useTranslation } from "next-i18next";
import YoutubeEmbed from "./YoutubeEmbed";
import InstagramEmbed from "./InstagramEmbed";

enum CollaborationType {
  INSTRAGRAM,
  FACEBOOK,
  YOUTUBE,
  OTHER,
}

const collaborations = [
  {
    id: "poczciwy_krzychu1",
    type: CollaborationType.YOUTUBE,
    link: "https://www.youtube.com/embed/NfImLQPO9uE?si=qEtR1_EtQ0BuOfH7",
  },
  {
    id: "edzioo1",
    type: CollaborationType.INSTRAGRAM,
    link: "https://www.instagram.com/reel/C8rZ5zctrC3/?utm_source=ig_embed&amp;utm_campaign=loading",
  },
  {
    id: "edzioo2",
    type: CollaborationType.INSTRAGRAM,
    link: "https://www.instagram.com/reel/C6OR5GyNpln/?utm_source=ig_embed&amp;utm_campaign=loading",
  },
];

const Socials = ({ videos }: { videos: any[] }) => {
  const { t } = useTranslation(["socials"]);
  return (
    <div className={styles.socials}>
      <div className={styles.collaborations}>
        <h2>{t("socials:collaborations")}</h2>
        <div className={styles.collaborationsContainer}>
          {collaborations.map((collaboration) => {
            return (
              <div
                key={collaboration.id}
                className={styles.collaborationsContainerItem}
              >
                {collaboration.type === CollaborationType.INSTRAGRAM ? (
                  <InstagramEmbed
                    src={collaboration.link}
                    key={collaboration.id}
                  />
                ) : (
                  <YoutubeEmbed
                    src={collaboration.link}
                    key={collaboration.id}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.youtubeVideos}>
        <div className={styles.youtubeVideosBackground} />
        <h2>{t("socials:youtube")}</h2>
        <div className={styles.youtubeVideosContainer}>
          {videos?.map((video) => {
            return (
              <div
                key={video.id.videoId}
                className={styles.youtubeVideosContainerItem}
              >
                <YoutubeEmbed
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Socials;
