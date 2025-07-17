import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from "./components/MainPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Navbar02 from "./components/Navbar02.jsx";

function App() {
  return (
    <Router>
        <div>
            <Navbar />
            <Navbar02 />
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </div>
    </Router>
  )
}

export default App
