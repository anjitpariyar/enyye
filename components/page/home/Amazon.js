import React from "react";
import { Section, Flex, Image, Left } from "./styled/Amazon.styled";
import { Container } from "../../../styled/Container";
import NextImage from "../../layouts/image/NextImage";

const Amazon = () => {
  return (
    <Section>
      <Container>
        <Flex href="#!">
          <Image>
            <NextImage
              height="70px"
              layout="contain"
              src="https://res.cloudinary.com/dem2xvk2e/image/upload/v1642933031/upwork/amazon-buy-button_1_pv70xg.png"
            />
          </Image>
          <Left>Buy on Amazon for Rs 9,499</Left>
        </Flex>
      </Container>
    </Section>
  );
};

export default Amazon;
