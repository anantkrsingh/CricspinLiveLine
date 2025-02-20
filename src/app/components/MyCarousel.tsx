"use client";
import React from "react";
import { LiveMatchItem } from "./LiveMatch";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = ({ liveMatches }) => {
  console.log(liveMatches)
  return (
    <div>
      <Carousel
        key={1}
        autoPlay
        interval={5000}
        transitionTime={500}
        showStatus={false}
        showIndicators={true}
        showArrows={false}
      >
        {liveMatches.map((item) => (
          <LiveMatchItem match={item} key={item.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
