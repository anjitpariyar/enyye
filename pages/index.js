import Footer from "../components/layouts/footer/Footer";
import Header from "../components/layouts/header/Header";
import NextImage from "../components/layouts/image/NextImage";
import Meta from "../components/seo/Meta";
import LowerNav from "../components/layouts/lowerNav/LowerNav";
import Screen from "../components/page/home/Screen";
import Amazon from "../components/page/home/Amazon";

/**
 *
 * @returns Home Page
 */

export default function Home() {
  return (
    <>
      <Meta title="Enyye" description="Enyye" image="" />
      <Header />
      <LowerNav />
      <Screen />
      <Amazon />
      <Screen />
      <Amazon />
      {/* <Footer /> */}
    </>
  );
}
