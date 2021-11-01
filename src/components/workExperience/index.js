import React from "react";
import "./style.css";

function WorkExperience() {
  const workList = [
    {
      workTitle: "Tuwaiq 1000 Trainee",
      workDate: "Oct 2021 – Present",
      workText: `An extraordinary journey that I've experienced. Starting with HTML and CSS and going thorough an extensive JavaScript contents, Designing and developing a react js webapp and react native mobile app with serverless backend.`,
    },
    {
      workTitle: "Technical Support Engineer at T2 Company",
      workDate: "May 2021 – Jul 2021",
      workText: `Technical Support Engineer on IAG's Chroma
    Design System team, however as there are only two developers on the team
    we have also been required to setup CI/CD workflows in Circle CI/Github
    Actions as well as hosting environments in AWS. I have had experience
    setting up deployments to S3 via the AWS CLI from Github Actions and
    setting up CloudFront, Route 53 and simple Lambda functions. I have also
    been responsible for creating and maintaining components both in our
    Core product which is html/scss and our React npm package which is
    consumed by the app development teams and setting up testing and
    documentation across the design system.`,
    },
    {
      workTitle: "Customer Experience Management at Contact Center Company",
      workDate: "Jul 2020 – May 2021",
      workText: `I am currently working as a senior front end developer on IAG's Chroma
    Design System team, however as there are only two developers on the team
    we have also been required to setup CI/CD workflows in Circle CI/Github
    Actions as well as hosting environments in AWS. I have had experience
    setting up deployments to S3 via the AWS CLI from Github Actions and
    setting up CloudFront, Route 53 and simple Lambda functions. I have also
    been responsible for creating and maintaining components both in our
    Core product which is html/scss and our React npm package which is
    consumed by the app development teams and setting up testing and
    documentation across the design system.`,
    },

    {
      workTitle: `CloudSystems SA Trainee`,
      workDate: "Apr 2018 – Jun 2018",
      workText: `An extraordinary journey that I've experienced. Starting with Linux and going thorough an extensive DevOpser, AWS training. Designing and developing a react js webapp and react native mobile app with serverless backend. An extraordinary journey that I've experienced. Starting with Linux and going thorough an extensive DevOpser, AWS training. Designing and developing a react js webapp and react native mobile app with serverless backend.`,
    },
  ];
  return (
    <div class="textContainer">
      <div class="title">
        <p>
          <i class="fas fa-building"></i>
          <b>Work Experience</b>
        </p>
      </div>
      <hr />
      {workList.map((item) => {
        return (
          <>
            <h5 className="workTitle">{item.workTitle}</h5>
            <p className="workDate">{item.workDate}</p>
            <p className="WorkText">{item.workText}</p>
          </>
        );
      })}
    </div>
  );
}

export default WorkExperience;
