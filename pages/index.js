import styles from "../styles/Home.module.css";

import Nav from "../components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        background: "url(/images/header_2x.jpg)",
        backgroundSize: "100% auto",
      }}
      className="h-screen"
    >
      <Nav />
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full justify-center text-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight text-center mx-auto uppercase">
              <span className="bg-blue-500">AUTOMOTIVE FUN</span>
            </h1>
            <p className="leading-normal text-2xl mb-8 text-center mx-auto">
              <span className="bg-blue-500">
                Team Shadow Racing is an online and real life car club. <br />
                We strive to be the best.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
