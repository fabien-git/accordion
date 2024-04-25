import "./App.css";
import Accordian from "./components/accordion/index";
//import Random from "./components/randomcolor/index";
//import Index from "./components/rating/index";
import Rating from "./components/rating/Rating";
import Slider from "./components/slider/Slider";
import LoadMore from "./components/load-more-data/Loadmore";

function App() {
  return (
    <div className="App">
      <Slider url={"https://picsum.photos/v2/list"} limit={"8"} />
      <Accordian />
      <Rating nbOfStars={40} />
      {/*<LoadMore url={"https://dummyjson.com/products"} />*/}
    </div>
  );
}

export default App;
