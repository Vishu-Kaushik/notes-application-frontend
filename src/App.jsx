import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          {/* <Route exact path="/faq" element={<Home></Home>} /> */}
          {/* <Route exact path="/about" element={<Home></Home>} /> */}
          {/* <Route exact path="/profile" element={<Home></Home>} /> */}
          {/* <Route exact path="/login" element={<Home></Home>} /> */}
          {/* <Route exact path="/signup" element={<Home></Home>} /> */}
          {/* <Route exact path="/upload" element={<Home></Home>} /> */}
          {/* <Route exact path="/search" element={<Home></Home>} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
