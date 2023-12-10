import React, { createContext, useState } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardValue, setCardValue] = useState(0);

  const handleCardButtonClick = () => {
    setCardValue(cardValue + 1);
  };

  return (
    <CardContext.Provider value={{ cardValue, handleCardButtonClick }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
