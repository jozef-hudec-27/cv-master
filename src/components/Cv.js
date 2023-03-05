import React from 'react'
import Contact from './contact/Contact'
import Education from './education/Education'
import Profile from './Profile'
import ProfileInfo from './ProfileInfo'
import Skills from './skills/Skills'
import WorkExperience from './work_experience/WorkExperience'

export default function Cv() {
  return (
    <section id="cv">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Profile />
        <Contact />
        <Education />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ProfileInfo />
        <WorkExperience />
        <Skills />
      </div>
    </section>
  )
}
