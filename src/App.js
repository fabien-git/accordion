import "./App.css";
//import Accordian from "./components/accordion/index";
//import Random from "./components/randomcolor/index";
//import Index from "./components/rating/index";
//import Rating from "./components/rating/Rating";

//import Slider from "./components/slider/Slider";
import LoadMore from "./components/load-more-data/Loadmore";
import TreeView from "./components/tree-menu/index";
import sideMenu from "./components/tree-menu/sideMenu";

function App() {
  return (
    <div className="App">
      {/*<Slider url={"https://picsum.photos/v2/list"} limit={"10"} />*/}
      {/* <Accordian />*/}
      {/*<Rating nbOfStars={40} />*/}
      {/*<LoadMore url={"https://dummyjson.com/products"} />*/}
      <TreeView menus={sideMenu} />
    </div>
  );
}

export default App;
