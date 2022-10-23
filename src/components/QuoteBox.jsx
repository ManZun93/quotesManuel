import React from 'react';
import { useState } from 'react';
import quotes from '../quotes.json'


const QuoteBox = ({index}) => {

  




  return (
    <div className='quotes'>

      <h3><i className="fa-solid fa-quote-left"></i> {quotes[index].quote} <i className="fa-solid fa-quote-right"></i></h3>
      <h4>{quotes[index].author}</h4>
      
    </div>
  );
};

export default QuoteBox;