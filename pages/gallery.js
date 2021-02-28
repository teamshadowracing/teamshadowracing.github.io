import Image from "next/image";
import clsx from "clsx";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const galleries = [
  {
    title: "2021 Hyundai Elantra N Line",
    photos: [
      "https://imgur.com/wcqQOPL.jpg",
      "https://imgur.com/Qm5vKff.jpg",
      "https://imgur.com/HvBYFrS.jpg",
      "https://imgur.com/rmzQItr.jpg",
      "https://imgur.com/LqFbDtu.jpg",
      "https://imgur.com/Oo4NXTp.jpg",
      "https://imgur.com/9c9Nwkw.jpg",
      "https://imgur.com/F07NF6O.jpg",
    ],
  },
  {
    title: "Highlight Photos",
    photos: [
      "https://imgur.com/j2gntCE.jpg",
      "https://imgur.com/RgVaOJF.jpg",
      "https://imgur.com/xPC0vdr.jpg",
      "https://imgur.com/rWcENu9.jpg",
      "https://imgur.com/gKnHdj1.jpg",
      "https://imgur.com/Hp5WwwK.jpg",
    ],
  },
];

const Gallery = () => (
  <>
    <Nav />
    <div className="pt-16 w-full container mx-auto">
      {galleries.map(({ title, photos }) => (
        <div>
          <h2 className="text-4xl pb-4 pt-12">{title}</h2>
          <div
            className={clsx(
              "grid grid-flow-col",
              `grid-rows-${Math.ceil(photos.length / 2)}`
            )}
          >
            {photos.map((src) => (
              <div
                style={{
                  position: "relative",
                  objectFit: "contain",
                  height: "24vw",
                }}
              >
                <Image src={src} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <Footer />
  </>
);

export default Gallery;
