import Head from "next/head";

import MediaGrid from "../components/MediaGrid";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import getImgurAlbum from "../utils/getImgurAlbum";

const Gallery = ({ galleries }) => (
  <>
    <Head>
      <title>Team Shadow Racing - Media Gallery</title>
      <meta name="Description" content="Team Shadow is an online and real life automotive organization. Visit our website gallery to see pictures of our cars in video games and real life."></meta>
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
