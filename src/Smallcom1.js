import second from "./newcomImages/ac7.png";
import second1 from "./newcomImages/Ac3.png";
import second2 from "./newcomImages/Ac5.png";
import second3 from "./newcomImages/ac4.png";
import { Link } from "react-router-dom";
function Smallcom1() {
  
  
  return (

    <>
     
      <a href="new"><div id="serchhistry" >
          <b>
            <h3 id="heading">AC all products  | Up to 60% off</h3>
          </b>

          <div id="seconcom1">
            <img src={second} alt=".." className="second" />
          </div>

          <div id="seconcom2">
            <img src={second1} alt=".." className="second1" />
          </div>

          <div id="seconcom3">
            <img src={second2} alt=".." className="second2" />
          </div>

          <div id="seconcom4">
            <img src={second3} alt=".." className="second3" />
          </div>
        </div>
        </a>  
    </>
  );
}

export default Smallcom1;
