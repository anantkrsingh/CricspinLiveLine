import React from "react";
import Link from "next/link";
import { IMAGE_URL } from "@/app/utils/api";
import { LiveMatch } from "../page";

interface LiveMatchItemProps {
  match: LiveMatch;
}

interface JsonData {
  teamA?: string;
  teamB?: string;
  wicketA?: string;
  oversA?: string;
  wicketB?: string;
}

export const LiveMatchItem: React.FC<LiveMatchItemProps> = ({ match }) => {
  let jsonData = {};
  try {
    const sanitizedJsonData = match.jsondata.replace(
      /[\x00-\x1F\x7F-\x9F]/g,
      ""
    );
    let parsedJson: any = null;

    try {
      parsedJson = JSON.parse(sanitizedJsonData).jsondata;
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      return;
    }
    jsonData = parsedJson;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  let convertedDate: string | undefined;
  try {
    convertedDate = convertDateFormat(match.Matchtime.trim()?.split("at")[0]);
  } catch (e) {
    return null; 
  }

  function convertDateFormat(inputDate: string): string {
    const months: { [key: string]: string } = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };

    const parts = inputDate.split("-");
    const day = parts[0];
    const month = months[parts[1]];
    const year = parts[2];

    return `${day}-${month}-${year}`;
  }

  function parseDateTime(dateTimeString: string): Date {
    try {
      const parts = dateTimeString.split("-");
      const datePart =
        parts[0].trim() + " " + parts[1].trim() + " " + parts[2].split("at")[0];
      const timePart = parts[2].split("at")[1];
      const dateParts = datePart.split(" ");
      const day = parseInt(dateParts[0]);
      const monthAbbrev = dateParts[1];
      const year = parseInt(dateParts[2]);

      const timeParts = timePart.split(":");
      let hours = parseInt(timeParts[0]);
      const minutes = parseInt(timeParts[1].slice(0, 2));
      const ampm = timeParts[1].slice(2).trim().toLowerCase();

      if (ampm === "pm" && hours !== 12) {
        hours += 12;
      } else if (ampm === "am" && hours === 12) {
        hours = 0;
      }

      const monthMap: { [key: string]: number } = {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11,
      };

      const month = monthMap[monthAbbrev];
      return new Date(year, month, day, hours, minutes);
    } catch (e) {
      return new Date();
    }
  }

  function compareDateTimeWithCurrent(dateTimeString: string): number {
    const targetDateTime = parseDateTime(dateTimeString);
    const currentDateTime = new Date();

    if (targetDateTime < currentDateTime) {
      return -1;
    } else if (targetDateTime > currentDateTime) {
      return 1;
    } else {
      return 0;
    }
  }

  const comparisonResult = compareDateTimeWithCurrent(match.Matchtime);

  let isLive = false;
  if (comparisonResult < 0) {
    isLive = true;
  } else if (comparisonResult > 0) {
    isLive = false;
  } else {
    isLive = true;
  }

  return (
    <Link
      href={{
        pathname: `/results`,
        query: { matchId: match.MatchId, seriesId: match.seriesid },
      }}
      className="w-full mt-2 rounded-2xl overflow-hidden  bg-white flex flex-col"
    >
      <div className="flex justify-between">
        <p className="p-2 text-sm euclidMedium">{match.Title}</p>
        {isLive && match.Result === "" && (
          <p className="text-white p-2 font-[Rajdhani] bg-red-500">Live</p>
        )}
        {match.Result === "" && !isLive && (
          <p className="text-white p-2 font-[Rajdhani] bg-red-500">Upcoming</p>
        )}
        {match.Result !== "" && (
          <p className="text-white p-2 font-[Rajdhani] bg-red-500">Finished</p>
        )}
      </div>
      <div className="w-full flex flex-row euclidMedium">
        <div className="flex flex-col p-4 justify-start items-start">
          <img
            style={{
              border: " solid 4px",
              borderRadius: "9999px",
              width: "48px",
              height: "48px",
              borderColor: "rgb(214 211 209)",
            }}
            src={IMAGE_URL + match?.TeamAImage}
            className="teamLogo"
            alt=""
          />
          <h4 className=" font-bold text-start text-xl">
            {isLive && match.Result === "" ? jsonData?.teamA : match.TeamA}
          </h4>
          <h4 className="font-bold flex flex-row">
            {jsonData?.wicketA}{" "}
            <p className="text-gray-400 ms-1">({jsonData?.oversA})</p>{" "}
          </h4>
        </div>
        <div className="w-[inherit] h-[100%] flex justify-center self-center">
          <h3 className="text-red-500 font-bold">VS</h3>
        </div>
        <div className="flex w-[inherit] flex-col p-4 items-end">
          <img
            style={{
              border: " solid 4px",
              borderRadius: "9999px",
              width: "48px",
              height: "48px",
              borderColor: "rgb(214 211 209)",
            }}
            src={IMAGE_URL + match?.TeamBImage}
            className="teamLogo"
            alt=""
          />
          <h4 className=" font-bold text-right text-xl">
            {isLive && match.Result === "" ? jsonData?.teamB : match.TeamB}
          </h4>
          <h4 className="font-bold flex">{jsonData?.wicketB}</h4>
        </div>
      </div>
      <p className="p-2 euclidMedium text-start">{match.Matchtime}</p>
    </Link>
  );
};
