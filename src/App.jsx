import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import AboutUs from "./pages/AboutUs";
import Upload from "./pages/Upload";
import Faq from "./pages/Faq";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/faq" element={<Faq></Faq>} />
          <Route exact path="/about" element={<AboutUs></AboutUs>} />
          <Route exact path="/profile" element={<Profile></Profile>} />
          {/* <Route exact path="/login" element={<Login></Login>} /> */}
          {/* <Route exact path="/signup" element={<Signup></Signup>} /> */}
          <Route exact path="/upload" element={<Upload></Upload>} />
          <Route exact path="/search" element={<Search></Search>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
