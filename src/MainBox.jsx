// import "./Photos.css";
import {useState,useEffect} from 'react';
import Simple from "./Simple";
function MainBox(){
 const [searchvalue,setSearchValue]=useState('');
 const [products,setProducts]=useState(Simple);

 
 useEffect(()=>{
  const sv=searchvalue.trim();
  const result=Simple.filter(p=>{
        return p.title.toLowerCase().includes(sv.trim().toLowerCase());
  });
       setProducts(result);
 },[searchvalue])
 
 
 
 return <div id="Photos"> 
            <div id="header"> 
             {/* <center>
              <input type="search" placeholder="search here" onChange={(e)=>{
                 setSearchValue(e.target.value);
             }}/>
             <button id="search">search</button></center> */}
             </div>
            <div id="body">  
                 {
                      products.map((product,index)=>{
                             return <figure key={index}>
                                <img src={product.img} alt=''/>
                                <figcaption>
                                <h5 className='card-title'>{product.title}</h5>
                                <p className='card-text'>author: {product.author}</p>
                                </figcaption>
                             </figure>
                      })
                 }
            </div>
  </div>
}
export default MainBox;