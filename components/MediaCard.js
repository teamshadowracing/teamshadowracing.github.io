const MediaCard = ({ src, alt, thumbnail }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      width: "100%",
      height: "0",
      paddingTop: "56.25%",
      position: "relative",
    }}
  >
    <img
      src={thumbnail ? thumbnail : src}
      alt={alt}
      style={{
        flexShrink: "0",
        minWidth: "100%",
        minHeight: "100%",
        position: "absolute",
        top: "0",
        lelft: "0",
      }}
    />
  </div>
);

export default MediaCard;
