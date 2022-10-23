import React from 'react';
import { useState } from 'react';
import quotes from '../quotes.json'
import App from '../App';

const Button = ({nextQuote, colors, randomBackground}) => {
  
  return (
    <div>
      <button className='next-quote' onClick={nextQuote} style={{color:colors[randomBackground]}}> <i className ="fa-solid fa-circle-arrow-right"></i></button>
    </div>
  );
};

export default Button;