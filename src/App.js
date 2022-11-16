import { useState } from 'react';
import colorNames from 'colornames';
import './App.css';
import Display from './Display';
import InputColor from './InputColor';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarktext, setIsDarkText] = useState(false);
  const handleChange = (e) => {
    setColorValue(e.target.value);
    setHexValue(colorNames(e.target.value));
  };
  return (
    <div className="App">
      <Display
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarktext}
      />

      <InputColor
        id="input"
        handleChange={handleChange}
        colorValue={colorValue}
        setHexValue={setHexValue}
        isDarkText={isDarktext}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
