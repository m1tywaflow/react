import Header from "./components/Header";
import Genres from "./components/Genres";
import TextInfo from "./components/TextInfo";
import StarRating from "./components/StarRating";
import Buttons from "./components/Buttons";
import Posters from "./components/Posters";
import Background from "./components/Background";
import "bootstrap/dist/css/bootstrap.min.css";
import AgeСategory from "./components/AgeСategory";
import "../src/App.css";



function App() {
  return (
    <>
    <Background></Background>
      <Header></Header>
      <Genres></Genres>
      <TextInfo></TextInfo>
      <StarRating></StarRating>
      <Buttons></Buttons>
      <Posters></Posters>
      <AgeСategory></AgeСategory>
      <Background></Background>
    </>
  );
}

export default App;
