import React from 'react'
import { useEffect, useState } from "react";
import '../styles/about.css'

const about = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error loading skills:", error));
  }, []);

  return (
    <div>
      <div className='intro'>
     <h1 className='about-heading'>Know Who I Am</h1>
     <p className='about-desc'>Hi everyone! I'm Abhinav from Dhanbad, Jharkhand.
I am currently doing my SDE internship at Naukri.com.
I'm pursuing a Bachelor of Technology in Computer Science and Engineering from NIT Jamshedpur, and I'm in my 8th semester.
<br />
<br />
Apart from coding, I love playing BGMI and other esports and spending time with friends.</p>
</div>
<div className='skills'>
<div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="text-center">
            <img src={skill.image} alt={skill.name} className="w-16 h-16 mx-auto" />
            <p className="mt-2 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
</div>
<span style={{margin: '0 auto'}}>"The Universe always falls in love with a stubborn heart"</span>
    </div>
  )
}

export default about
