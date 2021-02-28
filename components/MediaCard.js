const MediaCard = ({ src }) => (
  <div
    style={{
      position: "relative",
      height: "28vw",
      overflow: "hidden"
    }}
  >
    <img src={src} style={{objectFit: "contain", width: "53vw"}} />
  </div>
);

export default MediaCard;
