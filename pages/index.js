import Meta from "../components/seo/Meta";

import Main from "../components/page/home/Main";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleReactLightbox from "simple-react-lightbox";

/**
 *
 * @returns Home Page
 */

export default function Home() {
  return (
    <>
      <SimpleReactLightbox>
        <Meta title="Enyye" description="Enyye" image="" />
        <Main />
      </SimpleReactLightbox>
    </>
  );
}
