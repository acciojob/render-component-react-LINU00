import React, {Component, useState} from "react";
import '../styles/App.css';
import React from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div id="main"></div>
  )
}
  const projects = [
    {
      name: "AI Chatbot",
      description: "A chatbot that uses NLP to understand and respond to users intelligently."
    },
    {
      name: "E-Commerce Platform",
      description: "An online marketplace with cart, checkout, and payment integration."
    },
    {
      name: "Health Tracker App",
      description: "An app that tracks fitness goals and daily calorie intake."
    }
  ];

  return (
    <div id="main" className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
};

export default App;
