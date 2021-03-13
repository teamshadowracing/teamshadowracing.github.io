import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import MediaGrid from "../components/MediaGrid";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Back } from "../components/Icons";

import getImgurAlbum from "../utils/getImgurAlbum";

const Gallery = ({ galleries }) => {
  const {
    query: { id: currentGalleryId },
  } = useRouter();

  const currentGallery = galleries.find(
    (gallery) => gallery.id === currentGalleryId
  );

  return (
    <>
      <Head>
        <title>Team Shadow Racing - Media Gallery</title>
        <meta
          name="Description"
          content="Team Shadow is an online and real life automotive organization. Visit our website gallery to see pictures of our cars in video games and real life."
        ></meta>
      </Head>
      <Nav />
      <div className="pt-24 w-full container mx-auto">
        {!currentGallery && (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {galleries.map(({ title, id, photos }, index) => (
              <div className="text-center" key={index}>
                <Link href={{ pathname: "/gallery", query: { id } }}>
                  <a>
                    <img
                      className="rounded-md shadow-lg"
                      src={photos[0].thumbnail}
                      alt={photos[0].alt}
                      style={{ height: 200, margin: "auto" }}
                    />{" "}
                    {title}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        )}
        {currentGallery && (
          <>
            <Link href="/gallery">
              <a className="textLink">
                <span className="icon">{Back}</span> Back to all galleries
              </a>
            </Link>
            {currentGallery.title && (
              <h2 className="text-4xl pb-4 pt-12 pl-4">
                {currentGallery.title}
              </h2>
            )}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {currentGallery.photos.map(({ src, alt, thumbnail }, index) => (
                <img key={index} src={thumbnail} alt={alt} />
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const galleries = [
    await getImgurAlbum("Y5Qa7dG"),
    await getImgurAlbum("QtESV61"),
  ];

  return {
    props: {
      galleries,
    },
  };
}

export default Gallery;
