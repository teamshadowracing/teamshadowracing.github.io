import Image from "next/image";

const MediaCard = ({ src }) => (
  <div
    style={{
      position: "relative",
      objectFit: "contain",
      height: "28vw",
    }}
  >
    <Image src={src} layout="fill" />
  </div>
);

export default MediaCard;
