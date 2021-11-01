import React from "react";
import "./style.css";

function WorkExperience() {
  const skills = ['HTML',
    'CSS',
    'Javascript',
    'Problem Solving',
    'MongoDB',
    'Java',
    'Kali Linux',
    'ES6',
    'React',
    'jQuery',
    'SASS',
    'AWS',
    'Github',
    'Babel',
    'Heroku',
    'CI',
    'Bootstrap',
    'Node.js',
    'php',
    'MySQL',
    'Git',
    'Responsive'];

  return (
    <div class="textContainer">
      <div class="title">
        <p>
          <i class="fas fa-code"></i>
          <b>Skills</b>
        </p>
      </div>
      <hr />
      <div class="skillsSet">
      {skills.map((item) => {
        return (
          <>
            <p className="skillText"><b>{item}</b></p>
          </>
        );
      })}
      </div>
    </div>
  );
}

export default WorkExperience;
