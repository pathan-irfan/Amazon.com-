import React, { useState} from "react";
import mobile from "./images/Amazon.jpg";
import laptop from "./images/Amazon3.jpg";
import headphone from "./images/Amazon4.avif";
import amazon from "./images/Amazon2.webp"
import Smallcom1 from "./Smallcom1";
import Smallcom3 from "./Smallcom3";
import Smallcom4 from "./Smallcom4";
import Smallcom2 from "./Smallcom2";
import New from "./New";
// import New from "./New";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function ImageSlider() {


  const [showNavbarForm, setShowNavbarForm] = useState(<New/>);

  
   ;
  

  const images = [mobile, laptop,headphone,amazon];
  const [currentIndex, setCurrentIndex] = useState(0);

  setInterval(()=>{
    setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
    
  );
    
},30000)

  const previous = () => {

    
  setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
      
    )}; 

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div id="Test">
     
      
    <div id="xyz">
      <button onClick={previous} className="sliderButton">
        &lt;
      </button>
      <img src={images[currentIndex]} alt="" id="imgSlider" />

      <button onClick={next} className="sliderButton">
      &gt;
      </button>
      
      </div>
     
      <div id="compo">
      <Smallcom1 action={()=>{
         setShowNavbarForm( true)
         setShowNavbarForm(alert())

      }}/> 
      <Smallcom3/>
      <Smallcom4/>
      <Smallcom2/>
      </div>
    
      {/* <div id="compo1">
        <Smallcom1/> 
      <Smallcom3/>
      <Smallcom4/>
      <Smallcom2/>
    
      </div>
       */}
    
      </div>
     


    </>

  );
}

export default ImageSlider;
