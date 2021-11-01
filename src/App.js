import React from 'react'
import Profile from './components/profile'
import TextSection from './components/about'
import WorkExperience from './components/workExperience'
import Skills from './components/skills'
import Education from './components/education'


import './App.css'

function App() {
    return (
      <>
        <div className="container">
            <Profile />
            <TextSection />
            <WorkExperience key={0}/>
            <Skills />
            <Education />
        </div>
      </>
    )
}

export default App;