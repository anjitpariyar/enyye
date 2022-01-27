import React from "react";
import { CardSmall, Height, Wrapper, Para } from "./styled/Photo.styled";
import NextImage from "../../layouts/image/NextImage";
import Slider from "react-slick";
import { SRLWrapper } from "simple-react-lightbox";

const Photo = () => {
  const images = [
    "https://res.cloudinary.com/dem2xvk2e/image/upload/v1642931166/upwork/Galaxy-M12-camera-sample-5_1_ssddew.png",
    "https://res.cloudinary.com/dem2xvk2e/image/upload/v1642931166/upwork/b7d13773639a7cfd470922ea19de53aff5059050_1_eii8kg.png",
    "https://res.cloudinary.com/dem2xvk2e/image/upload/v1642931166/upwork/20210320_175717_1_gaxjf1.png",
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <SRLWrapper>
      <Wrapper>
        <Para>Photos clicked on m12 - click to enlarge</Para>
        <Slider {...settings}>
          {images.map((image, i) => (
            <Height style={{ height: "100%" }} key={i}>
              <a href={image}>
                <CardSmall>
                  <NextImage height="100px" layout="cover" src={image} />
                </CardSmall>
              </a>
            </Height>
          ))}
        </Slider>
      </Wrapper>
    </SRLWrapper>
  );
};

export default Photo;
