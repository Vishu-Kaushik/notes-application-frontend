import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import AboutUs from "./pages/AboutUs";
import Upload from "./pages/Upload";
import Faq from "./pages/Faq";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";


const App = () => {
  const isLogin = useSelector((state) => state.user.isAuthenticated);
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/faq" element={<Faq></Faq>} />
          <Route exact path="/about" element={<AboutUs></AboutUs>} />
          {isLogin ? (
            <>
              <Route exact path="/profile" element={<Profile></Profile>} />
              <Route exact path="/upload" element={<Upload></Upload>} />
              <Route exact path="/search" element={<Search></Search>} />
            </>
          ) : (
            <>
              <Route exact path="/signup" element={<Signup></Signup>} />
              <Route exact path="/login" element={<Login></Login>} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
};

export default App;
