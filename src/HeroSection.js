import React from "react";
import FeatureCard from "./FeatureCard";
import "./HeroSection.css";
import LaptopKidImage from './assets/laptop-kid.png';

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>STEM Learning Made Fun</h1>
        <p>
          Engage students in science, technology, engineering, and math with
          learning analytics.
        </p>
        <button className="demo-btn">Try a Demo</button>
        <div className="features">
          <FeatureCard
            icon="💡"
            title="Big-Picture Questions"
            desc="Encourage creativity and critical thinking through thought-provoking video prompts."
          />
          <FeatureCard
            icon="📊"
            title="Actionable Insights"
            desc="Support teaching and learning with powerful formative assessment tools."
          />
          <FeatureCard
            icon="🧬"
            title="Formative Experiences"
            desc="Develop students’ STEM skills via engaging, real-world challenges."
          />
        </div>
      </div>
      <div className="hero-right">
        <img src={LaptopKidImage} alt="Child using laptop" />
      </div>
    </div>
  );
}

export default HeroSection;
