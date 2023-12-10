import React from 'react'
import Ac from "./newcomImages/ac2.png"
import Ac2 from "./newcomImages/Ac1.png"
import Ac3 from "./newcomImages/Ac3.png"
import Ac4 from "./newcomImages/ac8.avif"
import Ac5 from "./newcomImages/Ac5.png"
import Ac6 from "./newcomImages/ac6.png"
import Ac7 from "./newcomImages/ac7.png"

function Scroller() {
  return (
    <div style={{height:"50vh",width:"100%",backgroundColor:"",overflowX:"scroll",display:"flex",flexDirection:"row"}}>

        <div style={{height:"200px",marginTop:"6%",boxShadow:"2px 2px 2px 2px rgb(225, 224, 224) "}}>
      <img src={Ac} alt="..." style={{height:"150px"}}/>
      </div>
      <div style={{height:"200px",marginTop:"6%",boxShadow:"2px 2px 2px 2px rgb(225, 224, 224) "}}>
      <img src={Ac2} alt="..." style={{height:"150px"}}/>
      </div> <div style={{height:"200px",marginTop:"6%",boxShadow:"2px 2px 2px 2px rgb(225, 224, 224) "}}>
      <img src={Ac3} alt="..." style={{height:"150px"}}/>
      </div> <div style={{height:"200px",marginTop:"6%",boxShadow:"2px 2px 2px 2px rgb(225, 224, 224) "}}>
      <img src={Ac4} alt="..." style={{height:"250px"}}/>
      </div> <div style={{height:"200px",marginTop:"6%",boxShadow:"2px 2px 2px 2px rgb(225, 224, 224) "}}>
      <img src={Ac5} alt="..." style={{height:"150px"}}/>
      </div> <div style={{height:"200px",marginTop:"6%",boxShadow:"2px 2px 2px 2px rgb(225, 224, 224) "}}>
      <img src={Ac6} alt="..." style={{height:"150px"}}/>
      </div> <div style={{height:"200px",marginTop:"6%",boxShadow:"2px 2px 2px 2px rgb(225, 224, 224) "}}>
      <img src={Ac7} alt="..." style={{height:"100px"}}/>
      </div> <div style={{height:"200px",marginTop:"6%",boxShadow:"2px 2px 2px 2px rgb(225, 224, 224) "}}>
      <img src={Ac} alt="..." style={{height:"150px"}}/>
      </div>

    </div>
  )
}

export default Scroller
