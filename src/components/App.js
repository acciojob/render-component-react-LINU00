import React, {Component, useState} from "react";
import '../styles/App.css';

const projects = [
  { name: "AutoHire", description: "Automatic Job Application Agent"},
  { name: "Retainix", description: "Student dropout risk predictor"},
  { name: "Mockmate", description: "AI Mock Interview Application"}
]
const App = () => {
  return (
    <div id="main">
      {projects.map((project, index) => (
        <div key={index} className="ns-wrapper">
            <h1 data-ns-test="project-name">{project.name}</h1>
            <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  )
}


export default App;
