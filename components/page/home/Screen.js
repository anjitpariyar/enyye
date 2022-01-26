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
import NextImage from "../../layouts/image/NextImage";
import Slider from "react-slick";
import PrevArrow from "../../arrow/PrevArrow";
import NextArrow from "../../arrow/NextArrow";
import Amazon from "./Amazon";

const Screen = ({ videoId }) => {
  const settings = {
    dots: true,
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
          <Slider {...settings}>
            {[...Array(3)].map((x, i) => (
              <Height style={{ height: "100%" }} key={i}>
                <Video videoId={videoId} />
              </Height>
            ))}
          </Slider>
          <Amazon />
        </Main>
      </Container>
    </Section>
  );
};

export default Screen;
