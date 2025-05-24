import React from "react";
import HeroSection from "./HeroSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">💡 STEM LEARNING</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Teachers</li>
          <li>Courses</li>
          <li>Log in</li>
        </ul>
      </nav>
      <HeroSection />
    </div>
  );
}

export default App;
