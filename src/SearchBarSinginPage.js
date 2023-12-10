import React from 'react'

const SearchBarSinginPage = ({action}) => {
  return (
    <div onMouseLeave={(e)=>action()}>
      <div id='singinsearchbarpage' >

        <div id='singInbtndiv'> <center>  <button id='singInbtn'>sing in </button></center></div>
       <center> <p className='startpra'>new costmber? <a href='/'>start here</a></p></center> 
       <hr/>
       <div id='spandiv'>
        <div id= "yourList"><b> <center><p>your List </p> </center></b>
        <ul>
         <a href='/'> <li>creact a wish List </li></a>
         <a href='/'> <li>create a wish website </li></a>
         <a href='/'> <li>buby wishlist </li></a>
         <a href='/'> <li>discover your style </li></a>
         <a href='/'> <li>exploare showroom </li></a>



        </ul>
        
        </div>
        <div id='yourAccount'>  <b> <center><p>your Account</p> </center></b>
        <ul>
          <a href='/'><li>your order</li>                  </a>
          <a href='/'><li>your List</li></a>
          <a href='/'><li>your Wish List </li></a>
          <a href='/'><li>your recommendations</li></a>
          <a href='/'><li>your prime membership</li></a>
          
      

        </ul>
        
        
        </div>
      </div>
      </div>
      
     </div>
  )
}

export default SearchBarSinginPage
