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
} from "./styled/ScreenStyled.styled";
import { Container } from "../../../styled/Container";
import NextImage from "../../layouts/image/NextImage";

const Screen = ({ videoId }) => {
  return (
    <Section>
      <Container>
        <Main>
          <Video videoId={videoId} />
        </Main>
      </Container>
    </Section>
  );
};

export default Screen;
