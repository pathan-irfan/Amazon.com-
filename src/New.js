import React from 'react'
import { useState } from 'react'
import ac1 from "./newcomImages/Ac1.png"
import ac2 from "./newcomImages/ac2.png"
import ac3 from "./newcomImages/Ac3.png"
import ac4 from "./newcomImages/Ac5.png"
import ac5 from "./newcomImages/ac6.png"
import ac6 from "./newcomImages/ac7.png"
import ac7 from "./newcomImages/ac8.avif"
  




function New({ handleCardButtonClick,action }) {
  const [color1,setColor1]=useState("yellow")
  const [color2,setColor2]=useState("yellow")
  const [color3,setColor3]=useState("yellow")
  const [color4,setColor4]=useState("yellow")
  const [color5,setColor5]=useState("yellow")
  const [color6,setColor6]=useState("yellow")
  const [color7,setColor7]=useState("yellow")
////////////////////////////////////////////////////
const [color11,setColor11]=useState("red")
const [color12,setColor12]=useState("red")
const [color13,setColor13]=useState("red")
const [color14,setColor14]=useState("red")
const [color15,setColor15]=useState("red")
const [color16,setColor16]=useState("red")
const [color17,setColor17]=useState("red")

  

  const handleClick1 = () => {
    handleCardButtonClick();
    setColor1("green")
    
    
 ;}
  const handleClick2 = () => {
    handleCardButtonClick();
    setColor2("green")
      
    }

const handleClick3= () => {
  handleCardButtonClick()
      setColor3("green")
      ;}

  const handleClick4= () => {
    handleCardButtonClick()
          setColor4("green")
         ;}

const handleClick5= () => {
  handleCardButtonClick()
      setColor5("green")
;}
  
const handleClick6= () => {
  handleCardButtonClick()
        setColor6("green")
       ;}

 const handleClick7= () => {
  handleCardButtonClick()
            setColor7("green")
             ;}

///////////////////////////////////////////////////////////////


const handleClick11 =()=>{
  action()
  setColor11("grey")
  window.confirm("are you sure ")
  
}

const handleClick12=()=>{
  action()
  setColor12("grey")
  window.confirm("are you sure ")


}

const handleClick13=()=>{
  action()
  setColor13("grey")
  window.confirm("are you sure ")

}

const handleClick14=()=>{
  action()
  setColor14("grey")
  window.confirm("are you sure ")

}

const handleClick15=()=>{
  action()
  setColor15("grey")
  window.confirm("are you sure ")

}
const handleClick16=()=>{
  action()
  setColor16("grey")
  window.confirm("are you sure ")

}

const handleClick17=()=>{
  action()
  setColor17("grey")
  window.confirm("are you sure ")

}


  return (
    <div id='mainnew'>
    <div id='new' >
         
          <div id='flex'>
            <img src={ac1} alt='...' className='newimg'/>
            <div className='newbtn'>
              <p style={{marginTop:"8%",fontWeight:"600",fontSize:"20px"}}>AmazonBasics 1.5 Ton 3 Star Inverter Split AC (White, Anti-Bacterial, Turbo Mode)</p>
              <p style={{color:"red",fontWeight:"500",fontSize:"25px"}}>up to 43% off </p>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
               <p style={{backgroundColor:"red",color:"white",width:"fit-content",marginTop:"2%"}}>Limit time deal</p>
               <p>Save extra with No Cost EMI</p>
              <p style={{fontSize:"20px",fontWeight: "600"}}>price <span>₹29,990 M.R.P:₹52,999(43% off)</span></p>
               <p style={{fontWeight:"600"}}>FREE delivery by Mon, 3 Jul, 7:00 AM - 9:00 PM</p>
          <button onClick={handleClick1} style={{height:"30px",width:"160px",borderRadius:"20px",backgroundColor:color1}}>Add To Card </button>
          <button  onClick={handleClick11} style={{height:"30px",width:"160px",borderRadius:"20px",marginLeft:"1%",backgroundColor:color11}}>remove order</button>
          </div>
          </div>


{/* //////////////////////////////////////////////////////////////////////////////////// */}
         
          <div id='flex'style={{marginTop:"4%"}}>
            <img src={ac2} alt='...'  style={{height:"110px"}}/>
            <div className='newbtn'>
              <p style={{marginTop:"0%",fontWeight:"600",fontSize:"20px"}}>Lloyd 1.5 Ton 5 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Chrome Deco Strip, GLS18I5FWBEV)</p>
              <p style={{color:"red",fontWeight:"500",fontSize:"25px"}}>up to 28% off </p>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
               <p style={{backgroundColor:"red",color:"white",width:"fit-content",marginTop:"2%"}}>Limit time deal</p>
               <p>Save extra with No Cost EMI</p>
              <p style={{fontSize:"20px",fontWeight: "600"}}>price <span>₹29,990 M.R.P:₹52,999(28% off)</span></p>
               <p style={{fontWeight:"600"}}>FREE delivery by Mon, 3 Jul, 7:00 AM - 9:00 PM</p>
          <button onClick={handleClick2}  style={{height:"30px",width:"160px",borderRadius:"20px",backgroundColor:color2}}>Add To Card </button>
          <button onClick={handleClick12} style={{height:"30px",width:"160px",borderRadius:"20px",marginLeft:"1%",backgroundColor:color12}}>remove order</button>
          </div>
          </div>
{/* ///////////////////////////////////////////////////////////////////////////// */}
          <div id='flex'style={{marginTop:"2%"}}>
            <img src={ac3} alt='...' style={{height:"125px"}}/>
            <div className='newbtn'>
              <p style={{marginTop:"0%",fontWeight:"600",fontSize:"20px"}}>Samsung 1.5 Ton 3 Star Wind-Free Technology Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti-bacterial Filter, 2023 Model AR18CYLAMWK White)</p>
              <p style={{color:"red",fontWeight:"500",fontSize:"25px"}}>up to 59% off </p>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
               <p style={{backgroundColor:"red",color:"white",width:"fit-content",marginTop:"2%"}}>Limit time deal</p>
               <p>Save extra with No Cost EMI</p>
              <p style={{fontSize:"20px",fontWeight: "600"}}>price <span>₹50,890 M.R.P:₹52,999(59% off)</span></p>
               <p style={{fontWeight:"600"}}>FREE delivery by Mon, 3 Jul, 7:00 AM - 9:00 PM</p>
          <button onClick={handleClick3} style={{height:"30px",width:"160px",borderRadius:"20px",backgroundColor:color3}}>Add To Card </button>
          <button onClick={handleClick13} style={{height:"30px",width:"160px",borderRadius:"20px",marginLeft:"1%",backgroundColor:color13}}>remove order</button>
          </div>
          </div>

{/* ///////////////////////////////////////////////////////////////////////////// */}

<div id='flex'style={{marginTop:"2%"}}>
            <img src={ac4} alt='...'  style={{height:"110px"}}/>
            <div className='newbtn'>
              <p style={{marginTop:"0%",fontWeight:"600",fontSize:"20px"}}>Daikin 1.5 Ton 5 Star Inverter Split AC (Copper,2022,FTKM50U,White)</p>
              <p style={{color:"red",fontWeight:"500",fontSize:"25px"}}>up to 20% off </p>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
               <p style={{backgroundColor:"red",color:"white",width:"fit-content",marginTop:"2%"}}>Limit time deal</p>
               <p>Save extra with No Cost EMI</p>
              <p style={{fontSize:"20px",fontWeight: "600"}}>price <span>₹48,990 M.R.P:₹52,999(20% off)</span></p>
               <p style={{fontWeight:"600"}}>FREE delivery by Mon, 3 Jul, 7:00 AM - 9:00 PM</p>
          <button onClick={handleClick4} style={{height:"30px",width:"160px",borderRadius:"20px",backgroundColor:color4}}>Add To Card </button>
          <button  onClick={handleClick14} style={{height:"30px",width:"160px",borderRadius:"20px",marginLeft:"1%",backgroundColor:color14}}>remove order</button>
          </div>
          </div>
{/* ?///////////////////////////////////////////////////////////////////////////////////////////////// */}


<div id='flex'style={{marginTop:"2%"}}>
            <img src={ac5} alt='...' className='newimg'/>
            <div className='newbtn'>
              <p style={{marginTop:"0%",fontWeight:"600",fontSize:"20px"}}>Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White, GLS18I3FWAMC)</p>
              <p style={{color:"red",fontWeight:"500",fontSize:"25px"}}>up to 33% off </p>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
               <p style={{backgroundColor:"red",color:"white",width:"fit-content",marginTop:"2%"}}>Limit time deal</p>
               <p>Save extra with No Cost EMI</p>
              <p style={{fontSize:"20px",fontWeight: "600"}}>price <span>₹32,990 M.R.P:₹52,999(33% off)</span></p>
               <p style={{fontWeight:"600"}}>FREE delivery by Mon, 3 Jul, 7:00 AM - 9:00 PM</p>
          <button onClick={handleClick5} style={{height:"30px",width:"160px",borderRadius:"20px",backgroundColor:color5}}>Add To Card </button>
          <button  onClick={handleClick15} style={{height:"30px",width:"160px",borderRadius:"20px",marginLeft:"1%",backgroundColor:color15}}>remove order</button>
          </div>
          </div>




          <div id='flex'style={{marginTop:"2%"}}>
            <img src={ac6} alt='...' style={{height:"90px"}}/>
            <div className='newbtn'>
              <p style={{marginTop:"0%",fontWeight:"600",fontSize:"20px"}}>Samsung 1.5 Ton 5 Star Wind-Free Technology Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti-bacterial Filter, 2023 Model AR18CYNAMWK White)</p>
              <p style={{color:"red",fontWeight:"500",fontSize:"25px"}}>up to 39% off </p>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
               <p style={{backgroundColor:"red",color:"white",width:"fit-content",marginTop:"2%"}}>Limit time deal</p>
               <p>Save extra with No Cost EMI</p>
              <p style={{fontSize:"20px",fontWeight: "600"}}>price <span>₹45,499 M.R.P:
₹73,990
(39% off)</span></p>
               <p style={{fontWeight:"600"}}>FREE delivery by Mon, 3 Jul, 7:00 AM - 9:00 PM</p>
          <button onClick={handleClick6} style={{height:"30px",width:"160px",borderRadius:"20px",backgroundColor:color6}}>Add To Card </button>
          <button  onClick={handleClick16} style={{height:"30px",width:"160px",borderRadius:"20px",marginLeft:"1%",backgroundColor:color16}}>remove order</button>
          </div>
          </div>

          <div id='flex'style={{marginTop:"2%"}}>
            <img src={ac7} alt='...' style={{height:"250px"}}/>
            <div className='newbtn'>
              <p style={{marginTop:"0%",fontWeight:"600",fontSize:"20px"}}>NU 1.5 Ton 3 Star Inverter Split AC (2023 Model, NUAC153SCIA, White)</p>
              <p style={{color:"red",fontWeight:"500",fontSize:"25px"}}>up to 40% off </p>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
              <i class="fa-sharp fa-solid fa-star" style={{color: "#ffff00"}}></i>
               <p style={{backgroundColor:"red",color:"white",width:"fit-content",marginTop:"2%"}}>Limit time deal</p>
               <p>Save extra with No Cost EMI</p>
              <p style={{fontSize:"20px",fontWeight: "600"}}>price <span>₹29,990 M.R.P:
₹49,899
(40% off)</span></p>
               <p style={{fontWeight:"600"}}>FREE delivery by Mon, 3 Jul, 7:00 AM - 9:00 PM</p>
          <button onClick={handleClick7} style={{height:"30px",width:"160px",borderRadius:"20px",backgroundColor:color7}}>Add To Card </button>
          <button  onClick={handleClick17} style={{height:"30px",width:"160px",borderRadius:"20px",marginLeft:"1%",backgroundColor:color17}}>remove order</button>
          </div>
          </div>






</div>
</div>
  )
}

export default New
