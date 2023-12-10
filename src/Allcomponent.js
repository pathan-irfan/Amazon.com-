import "./style.css"
import Navbar from "./Navbar"
import ImageSlider from './ImageSlider'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import New from "./New"
import { useState,useEffect } from "react"
import Scroller from "./Scroller"

function Allcomponent() {

  const [cardValue, setCardValue] = useState(0);
  const [send,setSend]=useState(0)
  useEffect(() => {
    // Retrieve the card value from local storage
    const storedCardValue = localStorage.getItem('cardValue');
    if (storedCardValue) {
      setCardValue(parseInt(storedCardValue));
    }
  }, []);

  const handleCardButtonClick = () => {
    const newCardValue = cardValue + 1;
    setCardValue(newCardValue);
    // Store the updated card value in local storage
    localStorage.setItem('cardValue', newCardValue.toString());
    
  }
 
  const decrementCardValue = () => {
    const newCardValue = cardValue - 1;
    setCardValue(newCardValue);
    localStorage.setItem('cardValue', newCardValue.toString());
  };

   
  return (
    <div>
  <BrowserRouter>
  <Navbar cardValue={cardValue} send={send}  /> 
      <Routes>
      <Route path="new"element={<New handleCardButtonClick={handleCardButtonClick} action={decrementCardValue}  />}/>
      <Route path="new2"element={<New handleCardButtonClick={handleCardButtonClick}/>}/>
      <Route path="new3"element={<New handleCardButtonClick={handleCardButtonClick}/>}/>
      <Route path="new4"element={<New handleCardButtonClick={handleCardButtonClick}/>}/>
</Routes>
      <ImageSlider/>
    
      <Scroller/>
      <Scroller/>

      </BrowserRouter>
     
     

   
    
      
      </div>

      
   
  )
}

export default Allcomponent
