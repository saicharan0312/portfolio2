import React, {useState, useEffect} from 'react';
import "./Skills.css";
import skillsData from "../Data/JsonFiles/skills.json"

export default function Skills() {

  const [skillSet, setSkillSet] = useState("programming");
  const [desc, setDesc] = useState(skillsData[0]);
  
  useEffect(() => {
    const description = skillsData.filter((skill, index) => skill.name === skillSet);
    setDesc(description[0]);
  },[skillSet])

  console.log("skill" , skillSet);
  const techList = ["programming", "styling", "frameworks","tools", "databases", "operatingsystem"]
  return (
    <div className='skills-container'>
      <div className='skills-header-buttons'>
        {techList.map((tech, index)=>(
          <button 
            key={index} 
            className='tech-button'
            onClick={
              ()=> setSkillSet(tech)
            }
          >
            <span className='tech-text' >{tech}</span>
          </button>
        ))}
      </div>
      <div className='skills-one-one'>
        {desc.list.map((skill, index) => (
          <div className='skill-name'>
            <img src={skill} alt='skill-name' className='skill'/>
          </div>
        ))}
      </div>
    </div>
  )
}
