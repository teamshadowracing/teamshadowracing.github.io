import Head from "next/head";

import MediaGrid from "../components/MediaGrid";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Gallery = ({ galleries }) => (
  <>
    <Head>
      <title>Team Shadow Racing - Media Gallery</title>
    </Head>
    <Nav />
    <div className="pt-16 w-full container mx-auto">
      {galleries.map(({ title, photos }) => (
        <MediaGrid title={title} media={photos} />
      ))}
    </div>
    <Footer />
  </>
);

const getImgurAlbum = async (albumHash) => {
  const response = await fetch(`https://api.imgur.com/3/album/${albumHash}`, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Client-ID ${process.env.IMGUR_CLIENT}`,
    },
  });

  if (!response.ok) {
    throw new Error("IMGUR API ERROR: " + response.status);
  }

  const {
    data: { title, images },
  } = await response.json();

  return {
    title: title,
    photos: images.map(({ link: src, description: alt }) => ({
      src,
      alt,
      thumbnail: [src.slice(0, -4), "l", src.slice(-4)].join(""),
    })),
  };
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
