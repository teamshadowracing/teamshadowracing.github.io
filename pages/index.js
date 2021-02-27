import styles from "../styles/Home.module.css";

import Nav from "../components/Nav";
import Card from "../components/Card";
import { Cog, Video, Flag, Graph } from "../components/Icons";
import MediaGrid from "../components/MediaGrid";

export default function Home() {
  return (
    <>
      <div className={styles.tshero}>
        <Nav />
        <div className="pt-14 sm:pt-36 md:pt-48 lg:pt-60 xl:pt-72">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full justify-center text-center items-start text-center md:text-left">
              <h1 className="my-4 text-xl md:text-5xl font-bold leading-tight text-center mx-auto uppercase">
                <span className="bg-blue-500">AUTOMOTIVE FUN</span>
              </h1>
              <p className="leading-normal md:text-2xl mb-8 text-center mx-auto">
                <span className="bg-blue-500">
                  Team Shadow Racing is an online and real life car club. <br />
                  We strive to be the best.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500">
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            We like to go fast!
          </h2>
          <h3 className="my-4 text-2xl text-white">
            We race everything from iRacing to Forza and drive fun cars on the
            streets.
          </h3>
          <button className="bg-white text-gray-800 font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
            See Our Races
          </button>
        </div>
      </div>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="p-12 grid grid-rows-4 sm:grid-rows-4 md:grid-rows-2 lg:grid-rows-1 xl:grid-rows:5 grid-flow-col gap-4">
          <Card title="Race Cars" icon={Flag}>
            <p>
              Whether it's on the virtual track or the real one, we liketo go
              fast.
            </p>
          </Card>
          <Card title="Work on Cars" icon={Cog}>
            <p>
              Changing oil, upgrading brakes, chaning timing belts, we love it
              all.
            </p>
          </Card>
          <Card title="Use Data" icon={Graph}>
            <p>
              We like to use data to go fast. We analyze telemetry and monitor
              the slip angels.
            </p>
          </Card>
          <Card title="Entertain" icon={Video}>
            <p>We want to share our fun, that's why we post on YouTube!</p>
          </Card>
        </div>
      </div>
      <MediaGrid />
      <div className="bg-gray-800">
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Watch More
          </h2>
          <a href="https://www.youtube.com/channel/UCaje4yLTTxVJT4bf7PXDk6g" className="bg-white text-gray-800 font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
            Visit Our Youtube Channel
          </a>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto px-6 text-center py-10 text-gray-800">
          <p>&copy; Team Shadow Racing 2011-{(new Date()).getFullYear()}</p>
        </div>
      </div>
    </>
  );
}
