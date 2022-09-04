// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const toggle = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#191c23'
      document.body.style.color = 'white'
      showAlert("Dark Mode Enabled", "success")
      document.title = "TextUtils- Dark"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode Enabled", "success")
      document.title = "TextUtils- Light" 
    }
  }

  const showAlert = (message, type) => {
    setAlert({msg: message,
     type: type})
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
    {/* <BrouserRouter> */}
    <Navbar title = "TextUtils" mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
      
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      
    </Routes> */}
    <TextForm heading = "Enter your Text" showAlert={showAlert} mode={mode}/>
    {/* <About/> */}
    </div>
    {/* </BrouserRouter> */}
    </>
  );
}

export default App;
