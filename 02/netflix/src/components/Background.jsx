import { useEffect } from "react";
import backgr from "../assets/backgro.svg"
function Background() {
    useEffect(() => {
      document.body.style.backgroundImage = `url(${backgr})`;
      document.body.style.backgroundSize = "cover"; 
  
      return () => {
        document.body.style.backgroundImage = "";
      };
    }, []);
  
    return null; //не рендеримо
  }
export default Background;