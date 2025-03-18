import React from 'react'
import { useState,useEffect } from 'react'
import Educard from '../components/edu-card'
const education = () => {
const [Edu,setEdu]=useState([]);
useEffect(()=>{
    fetch('/education.json')
    .then((response)=>response.json())
    .then((data)=>setEdu(data));
},[]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
   {Edu.map((education) => (
          <Educard key={education.id} image={education.image} name={education.name} startYear={education.startYear} endYear={education.endYear} score={education.score} type={education.type}
          />
       ))}

</div>


)
}
export default education
