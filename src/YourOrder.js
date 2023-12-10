import React from 'react'
function YourOrder(props) {
  return (

    <div style={{position: 'reletive',marginTop:"4%" ,height:"100vh",width:"100vw"}} id='myorder'>
          <button type="button"className="btn-close" aria-label="Close" onClick={props.remove}style={{marginLeft:"97%",backgroundColor:"red"}}></button>
    <h1 style={{marginLeft:"10%",fontSize:"50px",fontWeight:"800",color:"black"}}>your totale order here::{props.coun}</h1>
        
       <h1>{props.d}</h1>
   
    </div>
    

  )
}

export default YourOrder
