// import Header from "./components/Header";
import Genres from "./components/Genres";
import TextInfo from "./components/TextInfo";
import StarRating from "./components/StarRating";
import Buttons from "./components/Buttons";
import Posters from "./components/Posters";
import Background from "./components/Background";
import "bootstrap/dist/css/bootstrap.min.css";
import AgeСategory from "./components/AgeСategory";
import first from "./assets/first.svg";
import second from "./assets/second.svg";
import third from "./assets/third.svg";
import four from "./assets/four.svg";
import five from "./assets/five.svg";
import leftArrow from "./assets/left.png";
import rightArrow from "./assets/right.png";
import "../src/App.css";
import Headerlog from "./components/HeaderLog"
const postersArray = [first, second, third, four, five];
function App() {
  return (
    <>
      <Background></Background>
      <Headerlog></Headerlog>
      <Genres></Genres>
      <TextInfo
        title="Stranger Things"
        year="2019"
        director="Shawn Levy"
        season="3"
        episodes="5"
        description="In 1980s Indiana, a group of young friends
        witness supernatural forces and secret government exploits. As they
        search for answers, the children unravel a series of extraordinary
        mysteries."
      ></TextInfo>
      <StarRating></StarRating>
      <Buttons></Buttons>
      <Posters
        posters={postersArray}
        leftArrow={leftArrow}
        rightArrow={rightArrow}
      />
      <AgeСategory age="16+"></AgeСategory>
      <Background></Background>
    </>
  );
}

export default App;
