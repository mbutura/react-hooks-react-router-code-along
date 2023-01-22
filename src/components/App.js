import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import NavBar from './NavBar';


function App(){
    return(
        <BrowserRouter>
        <NavBar/> 
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;