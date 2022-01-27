import React from "react";
import { MainSec } from "./styled/Main.styled";
import Screen from "./Screen";
import Header from "../../layouts/header/Header";

const Main = () => {
  return (
    <MainSec>
      <Header />
      <Screen videoId={["cmp08LVE3BM", "cmp08LVE3BM", "cmp08LVE3BM"]} />
      <Screen videoId={["Dbg2hbiMunA", "Dbg2hbiMunA", "Dbg2hbiMunA"]} />
      <Screen videoId={["LANSztkyXyA", "LANSztkyXyA", "LANSztkyXyA"]} />
      <Screen videoId={["w5IIAslXoXw", "w5IIAslXoXw", "w5IIAslXoXw"]} />
    </MainSec>
  );
};

export default Main;
