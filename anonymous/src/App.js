import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';

function App() {
  const [mode,changeMode] = useState('light');

  const toggleMode = () =>{
    if(mode==='dark'){
      changeMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      changeMode('dark');
      document.body.style.backgroundColor='rgb(23 31 26)';
    }
  }
  return (
    <>
      <Navbar title="Tattiss" mode={mode} toggleMode={toggleMode}/>
      <TextForm text="default" mode={mode}/>
    </>
  );
}

export default App;
