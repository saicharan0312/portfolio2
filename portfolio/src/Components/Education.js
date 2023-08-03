import React from 'react';
import eduData from "../Data/JsonFiles/education.json";
import "./Education.css"

export default function Education() {
  return (
    <div className='edu-container'>
      {eduData.map((edu, index) => (
        <div className='each-edu-container'>
          <div className='name-date'>
            <div className='logo-name'>
              <img src={edu.logo} alt='ucf' className='logo-style'/>
              <span className='school-name'>{edu.name}</span>
            </div>
            <span className='school-date'>{edu.date}</span>
          </div>
          <div className='course-degree'>
            <span className='degree'>{edu.degree} in </span>
            <span className='course'>{edu.course}</span>
          </div>
          <div className='cgpa-score'>
            <span className='cgpa'> CGPA : </span>
            <span className='score'>{edu.cgpa}</span>
          </div>
          <div>
            <span className='course-work-title'> COURSE WORK </span>
            <div className='bullet-points'>
              {edu.coursework.map((course, index) =>(
                <div className='point-to-point' key={index}>
                  <img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/direction-254-393852.png?f=avif&w=512' alt='bullet-icon' className='bullet'/>
                  <span className='point'>{course.project}</span>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// {
//   edu.coursework.map((course, index) => (
//     <div className='course-point' key={index}>
//       <img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/direction-254-393852.png?f=avif&w=512' alt='bullet-icon' className='bullet'/>
//       <div className='each-subject'>
//         <div>
//           <p className='subject-c'>{course.subject}</p>
//         </div>
//         <div>
//           <p className='project-c'>{course.project}</p>
//         </div>
//         <div>
//           <p className='link-c'>
//             {course.link}
//             <a href={course.link}> 
//             <img src='https://img.icons8.com/?size=512&id=n9d0Hm43JCPK&format=png' alt='link-t' className='link-tag'/>
//             </a> 
//           </p>
//         </div>
//       </div>
//     </div>
//   ))
// }
