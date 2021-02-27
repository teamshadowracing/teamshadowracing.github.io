import MediaCard from "./MediaCard";
import clsx from 'clsx'

const media = [
  {
    type: "image",
    src: "/images/portfolio/fullsize/1.jpg",
  },
  {
    type: "image",
    src: "/images/portfolio/fullsize/2.jpg",
  },
  {
    type: "image",
    src: "/images/portfolio/fullsize/3.jpg",
  },
  {
    type: "image",
    src: "/images/portfolio/fullsize/4.jpg",
  },
  {
    type: "image",
    src: "/images/portfolio/fullsize/5.jpg",
  },
  {
    type: "image",
    src: "/images/portfolio/fullsize/6.jpg",
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
