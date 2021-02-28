import MediaCard from "./MediaCard";
import clsx from 'clsx'

const media = [
  {
    type: "image",
    src: "https://i.imgur.com/rWcENu9.jpg",
  },
  {
    type: "image",
    src: "https://i.imgur.com/xPC0vdr.jpg",
  },
  {
    type: "image",
    src: "https://imgur.com/Qm5vKff.jpg",
  },
  {
    type: "image",
    src: "https://i.imgur.com/gKnHdj1.jpg",
  },
  {
    type: "image",
    src: "https://i.imgur.com/j2gntCE.jpg",
  },
  {
    type: "image",
    src: "https://i.imgur.com/RgVaOJF.jpg",
  },
];

const MediaGrid = () => (
  <div className={clsx("grid grid-flow-col", `grid-rows-${media.length/2}`)}>
    {media.map(({ src }, index) => (
      <MediaCard key={index} src={src} />
    ))}
  </div>
);

export default MediaGrid;
