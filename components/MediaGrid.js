import MediaCard from "./MediaCard";

const MediaGrid = ({ title, media }) => (
  <>
    {title && <h2 className="text-4xl pb-4 pt-12 pl-4">{title}</h2>}
    <div className="grid grid-cols-2">
      {media.map(({ src }, index) => (
        <MediaCard key={index} src={src} />
      ))}
    </div>
  </>
);

export default MediaGrid;
