import Star from "./Components/star-rating/Star";
import "./App.css";
import Accordion from "./Components/accordion/Accordion";
import Color from "./Components/color-genrertor/Color";
import ImgSlider from "./Components/image-slider/ImgSlider";
import Index from "./Components/load-more/Index";
import Tree from "./Components/tree-view/Tree";
import { menusData } from "./Components/tree-view/data";
import Qr from "./Components/QR_Genrator/Qr";
import LightDark from "./Components/light-dark-mode/LightDark";
import Scroller from "./Components/QR_Genrator/Scroller";
export default function App() {
  return (
    <div className="page">
      {/* 1.Accordion component  */}
      <Accordion />

      {/* 2.color component */}
      <Color />

      {/* 3.Star component */}
      <Star allStar={5} />

      {/* 4. Image Slider */}
      <ImgSlider limit={10} />

      {/*5. Load More  */}
      <Index />

      {/* 6.Tree View */}
      <Tree listData={menusData} />

      {/*7.QR Genretor  */}
      <Qr />

      {/* 8. Dark and Light mode */}
      {/* <LightDark /> */}
      {/* TODO complete the light and dark mode component */}

      {/* 9. Scroller */}
      <Scroller url={'https://dummyjson.com/products?limit=100'}/>
    </div>
  );
}
