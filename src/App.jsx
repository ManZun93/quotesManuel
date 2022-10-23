import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuoteBox from './components/QuoteBox'
import Button from './components/Button'
import quotes from './quotes.json'

function App() {
 
  const randomQuotes = Math.floor(Math.random() * quotes.length )
  const [index, setIndex] = useState(randomQuotes)
  
  const nextQuote = () => {
    const anothrRandomQuote = Math.floor(Math.random() * quotes.length )
    setIndex (anothrRandomQuote)
  }

const colors = ["#B45EC2", "#B45EC2", "#B5A7B6", "#009991", "#00635E", "#8E3000", "#637FB0", "#85C25E", "#41B570", "#41493B"]
const randomBackground = Math.floor(Math.random() * colors.length )
document.body.style = `background-color: ${colors[randomBackground]}`;



  return (
    <div className="App" style={{color:colors[randomBackground]}}>
      <div className='quote-container'>
        <QuoteBox index={index} />
        <Button colors = {colors} randomBackground={randomBackground} nextQuote={nextQuote} />
      </div>

     
    </div>
  )
}

export default App
