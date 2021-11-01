import React from "react";
import "./style.css";
import ProfilePic from "./profile.jpg";

function Profile() {
  return (
    <div className="left">
      <img src={ProfilePic} width="200" alt="profile pic" />
      <h2>Sulaiman Albulaihy</h2>
      <h4>Tuwaiq 1000 Trainee</h4>
      <hr />
      <p>
        <i className="fas fa-location-arrow co"></i>Buraydah, Qassim Saudi Arabia
      </p>
      <p><i className="fas fa-envelope co"></i><a href="mailto:">sulaiman3sa@gmail.com</a></p>
      <hr />
      <p><a href="https://twitter.com/Sulaima252"><i className="fab fa-twitter"></i></a> <a href="https://github.com/Sulaiman122"><i className="fab fa-github"></i></a></p>
      <hr />
      <p>I built this site with React components and a JSON Resume Schema. The full source code can be found in my Github repo.</p>
    </div>
  );
}
export default Profile;
