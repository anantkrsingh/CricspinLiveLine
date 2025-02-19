import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fastest Cricket Live Line : Cricspin",
  description:
    "Get Live Cricket Scores, Scorecard, Commentary, Match Info and Schedules of All International and Domestic Matches, Serieswise Stats, Records, Analysis and Facts, Trending News and Tweets, Recent ICC Player and Team Rankings",
  keywords: [
    "Indian Premier League",
    "IPL 2022",
    "IPL auction 2022",
    "IPL 2021 schedule",
    "Virat Kohli",
    "Sreesanth",
    "World Cup",
    "Cricket",
    "Fast live update",
    "Cricket live score",
    "T20 World Cup",
    "ODI World Cup",
    "Test cricket",
    "Cricket highlights",
    "Live cricket streaming",
    "IPL live score",
    "Cricket news",
    "BCCI",
    "T20 cricket",
    "MS Dhoni",
    "Rohit Sharma",
    "Sachin Tendulkar",
    "ICC rankings",
    "Cricket commentary",
    "Ashes series",
    "Asia Cup",
    "Champions Trophy",
    "Big Bash League",
    "CPL (Caribbean Premier League)",
    "Ranji Trophy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex justify-center items-center w-full`}
      >
        <div className="max-w-[375px] w-full h-screen overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
