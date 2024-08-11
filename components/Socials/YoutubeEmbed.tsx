const YoutubeEmbed = ({ src }: { src: string }) => (
  <iframe
    src={src}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    style={{
      width: "60vw",
      height: "28.125vw",
      maxWidth: "560px",
      maxHeight: "315px",
    }}
    allowFullScreen
  ></iframe>
);

export default YoutubeEmbed;
