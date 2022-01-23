import React from "react";
import { HeadStyle } from "./styled/HeadStyle.styled";
import { Container } from "../../../styled/Container";

// component
import Logo from "./Icon/Logo";

const Header = () => {
  return (
    <>
      <HeadStyle>
        <Container>
          <Logo />
        </Container>
      </HeadStyle>
    </>
  );
};

export default Header;
