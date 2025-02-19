import HomeFragment from "./components/HomeFragment";
import { Nav } from "./components/Nav";
import { get } from "./utils/api";

export interface LiveMatch {
  jsonruns: string;
  jsondata: string;
  Title: string;
  Matchtime: string;
  venue: string;
  Result: string;
  isfinished: number;
  ispriority: number;
  TeamA: string;
  TeamAImage: string;
  TeamB: string;
  seriesid: number;
  TeamBImage: string;
  ImgeURL: string;
  MatchType: string;
  MatchDate: string;
  MatchId: number;
  Appversion: any;
  adphone: string;
  adimage: string;
  admsg: string;
}

export interface Series {
  seriesname: string;
  seriesid: number;
  startdate: string;
  enddate: string;
}

const ClientHome = async () => {
  // Fetch data on the server side
  const liveMatchesResponse = await get<LiveMatch[]>("/LiveLine");
  const seriesResponse = await get<Series[]>("/Series");

  const liveMatches = liveMatchesResponse?.data || [];
  const series = seriesResponse?.data || [];

  return (
    <div>
      <div className="bg-[url(/bg.png)]">
        <HomeFragment
          upcomingMatches={[]}
          liveMatches={liveMatches}
          series={series}
        />
      </div>
      <Nav />
    </div>
  );
};

export default ClientHome;
