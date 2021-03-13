import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import Nav from "../components/Nav";
import Card from "../components/Card";
import Footer from "../components/Footer";
import TeamShadowLogo from "../components/TeamShadowLogo";
import { Cog, Video, Flag, Graph } from "../components/Icons";

export default function About() {
  return (
    <>
      <Head>
        <title>Team Shadow Racing - About</title>
        <meta name="Description" content="Team Shadow is an online and real life automotive organization. Visit our website more about Team Shadow vision, history, and future."></meta>
      </Head>
      <Nav />
      <div className="bg-pink-600 text-white mb-6">
        <div className="pt-24">
          <div className="container px-3 mx-auto">
            <div className="flex flex-col w-full justify-center text-center items-start text-center md:text-left">
              <h2 className="my-4 text-xl md:text-5xl font-bold leading-tight text-center mx-auto uppercase">
                About
              </h2>
              <p className="leading-normal md:text-2xl mb-8 text-center mx-auto">
                Team Shadow is an online and real life automotive organization.
                <br />
                We strive to be the best.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full container mx-auto py-3">
        <h3>
          <TeamShadowLogo racing />
        </h3>
        <p>
          Team Shadow Racing is all about{" "}
          <strong className="text-pink-600 uppercase">speed</strong>. The team's
          primary simulator for training is Assetto Corsa. It used to train for
          track racing and practicing touge runs. But speed is not about siting
          in the simulator, real speed is found on the track and auto cross
          course. After homing skills, official Team Shadow drivers demonstrate
          their skills in automotive competitions.
        </p>
      </div>
      <div className="w-full container mx-auto py-3">
        <h3 className="team-shadow-header">Fabrication</h3>
        <p>
          Team Shadow Fabrication is all about{" "}
          <strong className="text-pink-600 uppercase">creativity</strong>. Using
          state of the art production facilities and advanced CAD software, Team
          Shadow engineers are allowed to develop and produce parts that will
          increase performance and reliability. Making in house parts allows the
          team to save money and customize their vehicles to achieve maximum
          performance. Our ultimate goal: be best.
        </p>
      </div>
      <div className="w-full container mx-auto py-3">
        <h3 className="team-shadow-header">Media</h3>
        <p>
          Team Shadow Meida is all about{" "}
          <strong className="text-pink-600 uppercase">entertainment</strong>.
          Video, Audio, and pictures are the best way to experience automotive
          culture at home. And Team Shadow wants to bring that culture to you!
          Visit the{" "}
          <Link href="https://www.youtube.com/channel/UCaje4yLTTxVJT4bf7PXDk6g">
            <a className="textLink" >
              YouTube
            </a>
          </Link>{" "}
          channel to see videos of our pilots and check out our{" "}
          <Link href="/gallery">
            <a className="textLink" >
              Gallery
            </a>
          </Link>{" "}
          to see our virtual and real world vehicles.
        </p>
      </div>
      <div className="bg-gray-800 mt-6">
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Want to see us in action?
          </h2>
          <Link href="https://www.youtube.com/channel/UCaje4yLTTxVJT4bf7PXDk6g">
            <button className="bg-white text-gray-800 font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
              Watch on YouTube
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
