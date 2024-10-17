"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import "dev-widget";
import TwitterWobbleCard from "./TwitterWobbleCard";
import { CategoriesBentoGrid } from "./CategoriesBentoGrid";
import GitHubProfile from './GitHubProfile';


function WobbleGrid(props) {
  return (
    <>
      {/* <CategoriesBentoGrid /> */}

      <div className="font-texturina  grid grid-cols-1 lg:grid-cols-3 gap-8  w-full">
        <WobbleCard containerClassName="  col-span-1 lg:col-span-2 bg-blue-800 bg-opacity-50 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="">
            <h2 className="   text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              What I Built / Learnt Today ?
            </h2>
            <p className="mt-4  text-left  text-base/6 text-neutral-200 pb-5">
              A daily log of learnings / observations I came across during Work
              or log of progress on anything built outside of work (PaSsiOn
              ProJect they say)
            </p>
            <CategoriesBentoGrid dataSize={4} />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-blue-900 bg-opacity-50 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="">
            <h2 className=" text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Weekly Code Reports 🫡
            </h2>
            <p className=" mt-4 text-left  text-base/6 text-neutral-200 pb-5">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
            <CategoriesBentoGrid dataSize={1} />
          </div>
        </WobbleCard>
        {/* <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 bg-opacity-50 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
      <div className="w-full text-left ">
        <h2 className="text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white ">
          Weekly Code Reports 🫡
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200 " >
          With over 100,000 mothly active bot users, Gippity AI is the most
          popular AI platform for developers.
        </p>
        <CategoriesBentoGrid dataSize={3} />

      </div>
    </WobbleCard> */}

        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-opacity-50">
          <h2 className="max-w-80 text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Dev.to
          </h2>
          <div>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Articles I published on DEV.TO : findings , explaining my process
              to seek review from Fellow Devs , etc..
            </p>
            <div className="flex justify-center items-center w-full p-8 ">
              <dev-widget
                data-username="saurabhdaware"
                data-theme="pink"
                //   data-username ="rachitha"
                data-width="30rem"
              ></dev-widget>
            </div>
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 bg-opacity-50 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="backdrop-contrast-100">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Github
            </h2>
            <p className="mt-4 text-left  text-base/6 text-white">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
            <div className="container w-full mx-auto p-4  text-neutral-200 ">
              <GitHubProfile username="Rach1507" />
            </div>
          </div>
        </WobbleCard>

        <TwitterWobbleCard />
      </div>
    </>
  );
}

export default WobbleGrid;
