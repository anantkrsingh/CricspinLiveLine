import React from "react";
import Link from "next/link";

import { IMAGE_URL } from "../utils/api";
import { LiveMatch } from "../page";

interface UpcominMatchProps {
  item: LiveMatch;
  position: number;
}

export const UpcomingMatch: React.FC<UpcominMatchProps> = ({
  item,
  position,
}) => {
  return (
    <>
      <Link
        href={{
          pathname: `/upcomingresults`,
          query: { position: position },
        }}
        passHref
      >
        <div className="w-auto bg-white mt-4 p-2 ps-4 rounded-xl justify-between flex flex-col">
          <div className="text-black text-[16px] euclid">{item.Title}</div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <img
                  src={IMAGE_URL + item.TeamAImage}
                  className="rounded-full border-2  w-[48px] h-[48px]"
                  alt={item.TeamA}
                />
                <h4 className=" euclid font-bold ms-4 text-[18px]">
                  {item.TeamA}
                </h4>
              </div>
              <div className="flex flex-row items-center">
                <img
                  src={IMAGE_URL + item.TeamBImage}
                  className="rounded-full border-2  w-[48px] h-[48px]"
                  alt={item.TeamB}
                />
                <h4 className="euclid font-bold ms-4 text-[18px]">
                  {item.TeamB}
                </h4>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-[1px] h-full bg-gray-400   m-2"></div>
              <div className="ms-4 me-4 font-[Rajdhani] font-bold text-[#a50000]">
                Upcoming
              </div>
            </div>
          </div>
          <div className="text-[#9d6003] euclidMedium text-[16px] mt-2">
            {item.Matchtime}
          </div>
        </div>
      </Link>
    </>
  );
};
