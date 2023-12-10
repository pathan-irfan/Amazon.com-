import React, { useState, useEffect } from 'react';
import img from "./images/logo.1.png";
import location from "./images/location.png";
import flagimg from "./images/flagofind.png"
import NavbarForm from './NavbarForm';
import card from "./images/shoping icon.png"
import SearchBarSinginPage from './SearchBarSinginPage';
import Simple from './Simple';
import YourOrder from './YourOrder';

function Navbar({cardValue} ,{send}) {
  const [newone, setNewone] = useState(false);
  const [nav, setNav] = useState(null);
  const [yourorder,setYourOrder]=useState(null)
  const [searchvalue, setSearchValue] = useState('');
  const [products, setProducts] = useState(Simple);

  useEffect(() => {
    const sv = searchvalue.trim();
    const result = Simple.filter(p => {
      return p.title.toLowerCase().includes(sv.trim().toLowerCase());
    });
    setProducts(result);
  }, [searchvalue])

  const change = () => {
    setNav(<NavbarForm remove={() => {
      setNav(false);
    }}  />);
  };

  

  const showbtn = () => {
    setNewone(true);
  }

  const clebtn = () => {
    setNewone(false);
  }

  const handleSearchClick = () => {
    setSearchValue(document.getElementById('searchInput').value);
   
  }

  const yourOrder =()=>{
    setYourOrder(<YourOrder remove={ ()=>{
      setYourOrder(false)
    }}  coun={cardValue} se={send} />
    
   )

   
  }
  

  //  const handleSearchClick = () => {
  //   setCom (<SearchHistry  delete={()=>{
  //     setCom(false)
  //    }}/>)   
  // }

  return (
    <>
      {nav}
      {yourorder}
      {newone && <SearchBarSinginPage action={clebtn} />}
      <div id='box'>
        <img src={img} alt='logo' id='logo' />

        <button id='img_n_add' onClick={change}>
          <img src={location} alt='logo' id='location' />
          <span>hello </span>
          <p>select your address</p>
        </button>

        <div id='searchbaar'>
          <select id='serchItem'>
            <option>All</option>
            <option>Mobile</option>
            <option>dress</option>
            <option>shoos</option>
            <option>keyboed</option>
            <option>laptop</option>
            <option>mouse</option>
            <option>Alll Product</option>
            <option>T.V</option>
          </select>

          <input type="search" placeholder="search Here " id='searchInput'  />

          <button className="searchbtn" onClick={handleSearchClick}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <img src={flagimg} alt='' className='flagimg' />

        <select id='flagofsearchbar'>
          <option>EN </option>
          <option>Hindi</option>
          <option>Tamil</option>
          <option>urdu</option>
          <option>Marathi</option>
          <option>Panjabi</option>
          <option>Telgu</option>
          <option>Gujrati</option>
          <option>UK Eng</option>
        </select>

        <button id='singinbtn' onMouseOver={showbtn}>
          hello, sign in
          <br />
          account &nbsp;
        </button>

        <button id='returnorder'>
          return &<br />
          order
        </button>
           <button style={{width:"5%",height:"50px",backgroundColor:"black",border:"none"}} onClick={yourOrder}>
           <div id='count'>
          <img src={card} alt='' id="cardImg" />
          
           </div>
           </button>
           <div id='cont'>
           <span className='card2'>{cardValue} {send}</span>
                 
           </div>
          
      </div>
    
      
         </>
  );
}

export default Navbar;
