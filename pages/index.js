import Footer from "../components/layouts/footer/Footer";
import Header from "../components/layouts/header/Header";
import Meta from "../components/seo/Meta";
import LowerNav from "../components/layouts/lowerNav/LowerNav";
import Screen from "../components/page/home/Screen";
import Amazon from "../components/page/home/Amazon";
import Main from "../components/page/home/Main";

/**
 *
 * @returns Home Page
 */

export default function Home() {
  return (
    <>
      <Meta title="Enyye" description="Enyye" image="" />
      <Main />
      {/* <Screen /> */}
      {/* <Amazon /> */}
      {/* <Footer /> */}
    </>
  );
}
