import MediaCard from "./MediaCard";

const MediaGrid = ({ title, media }) => (
  <>
    {title && <h2 className="text-4xl pb-4 pt-12 pl-4">{title}</h2>}
    <div className="grid grid-cols-2">
      {media.map(({ src, alt, thumbnail }, index) => (
        <MediaCard key={index} src={src} alt={alt} thumbnail={thumbnail} />
      ))}
    </div>
  </>
);

export default MediaGrid;
