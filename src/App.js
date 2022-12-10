import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeScreen from "./Component/home";
import './Css/App.css';

function App() {

  let basename = process.env.PUBLIC_URL

  console.log("ssssss", basename)
  return (
    <div className=''>
      <div>
        <Routes>
          <Route path="/risk_link" element={<Navigate replace to="/risk_link/home" />} />
          <Route path="/risk_link/home" element={<HomeScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
