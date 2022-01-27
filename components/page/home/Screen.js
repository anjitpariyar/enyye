import React, { useState, useEffect } from "react";
import Video from "./Video";
import {
  Section,
  Title,
  Flex,
  Grid,
  ImageCard,
  VideoCard,
  Para,
  CardSmall,
  Main,
  Height,
} from "./styled/ScreenStyled.styled";
import { Container } from "../../../styled/Container";
import Slider from "react-slick";
import PrevArrow from "../../arrow/PrevArrow";
import NextArrow from "../../arrow/NextArrow";
import Amazon from "./Amazon";
import Photo from "./Photo";

const Screen = ({ videoId }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Section>
      <Container>
        <Main>
          <div>
            <Para>
              Click on Next arrow for next video and swip down for next phone
            </Para>
            <Slider {...settings}>
              {videoId.map((video, i) => (
                <Height style={{ height: "100%" }} key={i}>
                  <Video videoId={video} />
                </Height>
              ))}
            </Slider>
          </div>
          <Photo />
          <Amazon />
        </Main>
      </Container>
    </Section>
  );
};

export default Screen;
