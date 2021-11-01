import React from "react";
import "./style.css";

function Education() {
  const educationList = [
    {
      title: "Computer Science Bachelor Degree",
      date: "Qassim University Nov 2014 – May 2019",
    },
    {
      title: "Cybersecurity High Diploma Degree",
      date: "Qassim University Oct 2019 – May 2020",
    },
  ];
  return (
    <div className="textContainer">
      <div className="title">
        <p>
          <i className="fas fa-graduation-cap"></i>
          <b>Education</b>
        </p>
      </div>
      <hr />
      {educationList.map((item) => {
        return (
          <>
            <h5 className="workTitle">{item.title}</h5>
            <p className="educateDate">{item.date}</p>
          </>
        );
      })}
    </div>
  );
}

export default Education;
