import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import MediaGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import ProgressiveImage from 'react-progressive-image'

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Back } from "../components/Icons";

import getImgurAlbum from "../utils/getImgurAlbum";

const Gallery = ({ galleries }) => {
  const {
    query: { id: currentGalleryId },
  } = useRouter();

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
          <div>
            <h2 className="text-4xl pb-4 pt-4 pl-4 team-shadow-header">
              Media Gallery
            </h2>
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
          </div>
        )}
        {currentGallery && (
          <div>
            {currentGallery.title && (
              <h2 className="text-4xl pb-4 pt-4 pl-4 team-shadow-header">
                {currentGallery.title}
              </h2>
            )}
            <div className="hidden md:block">
              <MediaGallery
                onClick={openLightbox}
                photos={currentGallery.photos.map(
                  ({ alt, width, height, thumbnail }) => ({
                    alt,
                    width,
                    height,
                    src: thumbnail,
                  })
                )}
              />
            </div>
            <div className="block md:hidden">
              {currentGallery.photos.map(
                ({ alt, src, lowThumbnail }) =>
                  <ProgressiveImage src={src}>
                    {(src, loading) => loading ? <img style={{width: '100%'}} src={lowThumbnail} alt={alt} /> : <img src={src} alt={alt} />}
                  </ProgressiveImage>
              )}
            </div>
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={currentGallery.photos.map(
                      ({ alt, width, height, src }) => ({
                        alt,
                        width,
                        height,
                        src,
                        caption: alt,
                      })
                    )}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
            <Link href="/gallery">
              <a className="inline-flex items-center h-8 px-4 m-2 text-sm text-pink-100 transition-colors duration-150 bg-pink-700 rounded-lg focus:shadow-outline hover:bg-pink-800">
                <span className="icon pr-1">{Back}</span>
                <span>Back to all galleries</span>
              </a>
            </Link>
          </div>
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
