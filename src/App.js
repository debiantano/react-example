import './App.css';
import logo from "./images/logo.png"
import Button from "./components/Button.js"
import Counter from './components/Counter';
import { useState } from "react";

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const clickCounter = () => {
    setNumClicks(numClicks + 1);
  }

  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-content'>
        <img
          className='logo'
          src={logo}
          alt="logo-react"
        />
      </div>

      <Counter
        numClicks={numClicks}
      />

      <div className="container-main">
        <Button
          text="Click"
          isButtonClick={true}
          handlerClick={clickCounter}
        />

        <Button
          text="Reset"
          isButtonClick={false}
          handlerClick={resetCounter}
        />

      </div>
    </div>
  );
}

export default App;
