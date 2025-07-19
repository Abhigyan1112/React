import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
import Alert from './Components/Alert.js';
import About from './Components/About.js';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

function App() {
  const [mode,changeMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },3000)
  };
 
  const toggleMode = () =>{
    if(mode==='dark' || mode==='blue'){
      changeMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Activated","success");
    }
    else{
      changeMode('dark');
      document.body.style.backgroundColor='rgb(23 31 26)';
      showAlert("Dark Mode Activated","success");
    }
  }

  const toggleBlue = () =>{
    if(mode==='light'){
      changeMode('blue');
      document.body.style.backgroundColor='rgb(9 32 44)';
      showAlert("Dark Mode Activated","info");
    }
    else{
      changeMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Activated","info");
    }
  }

  const router = createBrowserRouter([
    {
      path:"/", 
      element : 
      <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleBlue={toggleBlue} About={About}/>
        <Alert alert={alert}/>
        <TextForm text="default" showAlert={showAlert} mode={mode} />
      </>
    },
    {
      path:"/About",
      element :
      <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleBlue={toggleBlue} About={About}/>
        <Alert alert={alert}/>
        <About/>
      </>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
