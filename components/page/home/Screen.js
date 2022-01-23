import React from "react";
import {
  Section,
  Title,
  Flex,
  Grid,
  ImageCard,
  VideoCard,
  Para,
  CardSmall,
} from "./styled/ScreenStyled.styled";
import { Container } from "../../../styled/Container";
import NextImage from "../../layouts/image/NextImage";

const Screen = () => {
  return (
    <Section>
      <Container>
        <Title>Samsung Ultra M12</Title>
        <Flex>
          <ImageCard>
            <NextImage
              height="500px"
              layout="cover"
              src="https://res.cloudinary.com/dem2xvk2e/image/upload/v1642929943/upwork/7162Y5fPdkL_1_ghmxw5.png"
            />
          </ImageCard>
          <VideoCard>
            <Para>See what top influencers are saying?</Para>
            <NextImage
              height="450px"
              layout="cover"
              src="https://res.cloudinary.com/dem2xvk2e/image/upload/v1642929944/upwork/Screenshot_2022-01-22_at_4.07_1_qjtkol.png"
            />
          </VideoCard>
        </Flex>
        <p>Photos clicked on m12 - click to enlarge</p>
        <Grid>
          <CardSmall>
            <NextImage
              height="300px"
              layout="cover"
              src="https://res.cloudinary.com/dem2xvk2e/image/upload/v1642931166/upwork/Galaxy-M12-camera-sample-5_1_ssddew.png"
            />
          </CardSmall>
          <CardSmall>
            <NextImage
              height="300px"
              layout="cover"
              src="https://res.cloudinary.com/dem2xvk2e/image/upload/v1642931166/upwork/b7d13773639a7cfd470922ea19de53aff5059050_1_eii8kg.png"
            />
          </CardSmall>
          <CardSmall>
            <NextImage
              height="300px"
              layout="cover"
              src="https://res.cloudinary.com/dem2xvk2e/image/upload/v1642931166/upwork/20210320_175717_1_gaxjf1.png"
            />
          </CardSmall>
        </Grid>
      </Container>
    </Section>
  );
};

export default Screen;
