const MediaCard = ({ src }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50vw",
      height: "28vw",
      overflow: "hidden",
    }}
  >
    <img
      src={src}
      style={{ flexShrink: "0", minWidth: "100%", minHeight: "100%" }}
    />
  </div>
);

export default MediaCard;
