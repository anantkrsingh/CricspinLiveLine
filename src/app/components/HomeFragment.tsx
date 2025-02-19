import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { LiveMatch as LiveMatchType, Series } from "../page";
import { UpcomingMatch } from "./UpcomingMatch";
import MyCarousel from "./MyCarousel";
import Logo from "@/app/favicon.png";
import { roboto } from "../fonts";

interface HomeProps {
  upcomingMatches: LiveMatchType[];
  liveMatches: LiveMatchType[];
  series: Series[];
}

export default function HomeFragment({
  upcomingMatches,
  liveMatches,
  series,
}: HomeProps) {
  return (
    <div className={`w-full top-8 font-[Roboto]  relative ${roboto.className}`}>
      <div className="fixed overflow-hidden top-0 w-[375px]  margin-0 bg z-10 flex self-center text-white justify-center flex-col items-center">
        <div className="flex justify-between w-full">
          <div className="p-4 euclidMedium items-center flex flex-row">
            <p className="text-xl">C</p>
            ricSpin
          </div>

          <Image
            src={Logo}
            width={60}
            height={60}
            alt="Cricspin"
            className="w-[60px] cursor-pointer"
          />
          <div className="p-4 euclidMedium items-center flex flex-row">
            <p className="text-xl">L</p>iveLine
          </div>
        </div>
        <div className="w-full mt-1 h-[1px] bg-gray-300 "></div>
      </div>

      <div className="w-full pl-4 top-8 font-[Roboto] ov relative">
        <a href="/live" className="w-full justify-between flex no-underline">
          <h6 className="items-center justify-center text-white m-2">
            Live Matches
          </h6>

          <div className="flex cursor-pointer items-center text-white ">
            See All <ChevronRight className="ml-2" color="white" />
          </div>
        </a>

        <MyCarousel liveMatches={liveMatches} />
        <a
          href="/upcoming"
          className="w-full justify-between flex no-underline"
        >
          <h6 className="items-center justify-center text-white m-2">
            Featured Matches
          </h6>
          <div className="flex cursor-pointer items-center text-white ">
            See All <ChevronRight className="ml-2" color="white" />
          </div>
        </a>
        {upcomingMatches.slice(0, 3).map((item, index) => (
          <UpcomingMatch item={item} position={index} key={item.id} />
        ))}

        <h6 className="items-center text-white mt-4 mx-4 ">Series</h6>

        {series.map((item) => (
          <div
            key={item.seriesid}
            className="w-full p-4 cursor-pointer bg-white mt-2 text-xl rounded-3xl shadow-xl"
          >
            <div>
              {item.seriesname} <br />
              {item.startdate} - {item.enddate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
