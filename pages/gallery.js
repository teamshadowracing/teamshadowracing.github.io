import Head from "next/head";

import MediaGrid from "../components/MediaGrid";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const galleries = [
  {
    title: "2021 Hyundai Elantra N Line",
    photos: [
      { src: "https://imgur.com/wcqQOPL.jpg", type: "image" },
      { src: "https://imgur.com/Qm5vKff.jpg", type: "image" },
      { src: "https://imgur.com/HvBYFrS.jpg", type: "image" },
      { src: "https://imgur.com/rmzQItr.jpg", type: "image" },
      { src: "https://imgur.com/LqFbDtu.jpg", type: "image" },
      { src: "https://imgur.com/Oo4NXTp.jpg", type: "image" },
      { src: "https://imgur.com/9c9Nwkw.jpg", type: "image" },
      { src: "https://imgur.com/F07NF6O.jpg", type: "image" },
    ],
  },
  {
    title: "Highlight Photos",
    photos: [
      { src: "https://imgur.com/j2gntCE.jpg", type: "image" },
      { src: "https://imgur.com/RgVaOJF.jpg", type: "image" },
      { src: "https://imgur.com/xPC0vdr.jpg", type: "image" },
      { src: "https://imgur.com/rWcENu9.jpg", type: "image" },
      { src: "https://imgur.com/gKnHdj1.jpg", type: "image" },
      { src: "https://imgur.com/Hp5WwwK.jpg", type: "image" },
    ],
  },
];

const Gallery = () => (
  <>
    <Head>
      <title>Team Shadow Racing - Media Gallery</title>
    </Head>
    <Nav />
    <div className="pt-16 w-full">
      {galleries.map(({ title, photos }) => (
        <MediaGrid title={title} media={photos} />
      ))}
    </div>
    <Footer />
  </>
);

export default Gallery;
