import React from "react";
import { HeadStyle } from "./styled/HeadStyle.styled";
import { Container } from "../../../styled/Container";
import Link from "next/Link";

// component
import Logo from "./Icon/Logo";

const Header = () => {
  return (
    <>
      <HeadStyle>
        <Container>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </Container>
      </HeadStyle>
    </>
  );
};

export default Header;
