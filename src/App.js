import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Signup from "./SignUp";
import Findbooks from "./Findbooks";
function Routing()
{
    return(
            <Router>
                <Routes>
                    <Route path="/" exact element = {<Home/>} />
                    <Route path="/Login" element = {<Login/>} />
                    <Route path="/SignUp" element = {<Signup/>} />
                    <Route path="/Findbooks" element = {<Findbooks/>} />
                </Routes>
            </Router>
    )
}
export default function App() {
  return <Routing />;
}
