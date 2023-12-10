import React from "react";
//import { useState } from "react";
function NavbarForm(props) {


  return (
    <center>
      <div id="formbox">
        <div id="navfirstpragraph">
          <bold>
            <p>
              Choose your location
              {/* this is a remove button i did pass the button help of props from navbar component  */}
              <button type="button"className="btn-close" aria-label="Close" onClick={props.remove}></button>
            </p>
          </bold>
        </div>
        <div id="navsecondpra">
          <p>
                  Select a delivery location to see product availability and delivery
            options
          </p>
        </div>
        <div id="navbarbtn">
          <button>sigh in to see your address</button>
        </div>
        <div id="navp">
          <p>----------or enter indian pincode----------</p>
        </div>
        <div id="navinput">
          <input type="text" className="int" />
          <button className="navbtn">Apply</button>
         </div>
      
      </div>
    </center>
  );
}

export default NavbarForm;
