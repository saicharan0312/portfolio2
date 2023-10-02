import React from 'react';
import "./ProjectItem.css"

const ProjectItem = (props) => {

    const skills = {
       "javascript" : "https://img.icons8.com/color/144/000000/javascript.png",
       "typescript" : "https://img.icons8.com/color/144/000000/typescript.png",
       "css" : "https://img.icons8.com/color/144/000000/html-5--v1.png",
       "reactnative" : "https://img.icons8.com/color/144/000000/react-native.png", 
       "React" : "https://i.ibb.co/7NfB2rt/rn2.png",
       "redux" : "https://img.icons8.com/color/144/000000/redux.png",
       "Nodejs" : "https://img.icons8.com/color/144/000000/npm.png", 
       "Express" : "https://i.ibb.co/9smDM6j/pngegg.png",
       "Mongodb" : "https://i.ibb.co/ZVh01dm/rsz-mong2.png",
       "Visualstudio" : "https://img.icons8.com/?size=512&id=48455&format=png",  
    }
 
    props.techStack.map((skill, index)=>
       console.log(skills.skill)
    )
  return (
    <>
    <div className='project-card'>
        <div className='project-image'>
            { props.title }
        </div>
        <div className='project-title'>
            { props.title }
        </div>
        <div className='project-content'>
            { props.content }
        </div>
        <div className='project-tech-stack'>
            {props.techStack.map((skill, index) =>(
                <img src={skills[skill]} alt='skill-name' className='project-skill' key={index}/>
            ))}
        </div>
    </div>
    <div className='project-link-desc-buttons'>
        <button>
            github
        </button>
        <button>
            learn more
        </button>
    </div>
    </>
  )
}

export default ProjectItem;

// {
//     "title": "Branch Predictor Simulator design (C++ and Verilog)",
//     "imagen" : "BranchPredictor",
//     "content": "How branch predictor is take or not taken time to time",
//     "gitHubUrl": "https://github.com/saicharan0312/Advanced-Computer-Architecture/tree/main/mp2",
//     "liveUrl": null,
//     "description": [
//       "Constructed a branch predictor simulator and used it to design branch predictors well suited to the SPECint95 benchmarks.",
//       "Smith N-Bit Branch Predictor, Bimodal branch predictor, Gshare branch predictor, Hybrid Predictor were designed and analysis of parameters like mispredictions, miss rate were done using graphs for different case of counter bit values."
//     ],
//     "techStack": ["Cplusplus"]
//   },
//   {
//     "title": "Web application for social responsibility",
//     "imagen" : "Cache",
//     "content": "Django full stack web application used for raising funds or social event",
//     "gitHubUrl": "https://github.com/saicharan0312/project",
//     "liveUrl": null,
//     "description": [
//       "Framework used are django, sqlite, django channels to introduce chat system in app, It is web based application which is intended for all corporates and individuals to colloborate for a social issue.",
//       "Every user have authetication to login into it and post if any of the donations, plantations, or any event is going to held.",
//       "Every one who is login into portal can see all the event can happen. have some authority to like, comment also.",
//       "Every one can chat with other any other person if they have specific user_id. They are done by django channels."
//     ],
//     "techStack": ["Django", "Livechat" ,"Python", "Sqlite"]
//   },
//   {
//     "title": "Drowsiness Detection using Machine learning Algorithm",
//     "imagen" : "Drowsiness",
//     "content": "Real time drowsiness detection using CNN when the camera is running all the time",
//     "gitHubUrl": "https://github.com/saicharan0312/Advanced-Computer-Architecture/tree/main/mp2",
//     "liveUrl": null,
//     "description": [
//       "Step -1. Take the image as input from a camera",
//       "Step -2. detect the face in the image and create a region of interest",
//       "Step 3. Detect the eyes from the ROI and mark the six coordinates",
//       "Step -4. Calculate the aspect ratio using the euclidean distance using formulae",
//       "Step -5. Calculate the score and if that is less than 0.25 eyes we closed and bring an alert in that",
//       "Step -6. Run this until the camera is off"
//     ],
//     "techStack": ["Python", "Digitalocean", "Pycharm"]
//   },
//   {
//     "title": "Breast Cancer detection using CNN",
//     "imagen" : "BreastCancer",
//     "content": "How cache is stored in real time",
//     "gitHubUrl": "https://github.com/saicharan0312/Advanced-Computer-Architecture/tree/main/mp2",
//     "liveUrl": null,
//     "description": [
//       "Firstly sort out the images into two categories—cancer and non-cancer—and verified that they were loaded.",
//       "Running through all of the images is how modeling and data splitting are done.",
//       "choose 30% of the patients as test subjects and the other 70% for development and training.",
//       "by flipping each image horizontally and vertically, the images were scaled to the appropriate input shape. The patches in my case are 50x50x3, so we could use that as our input shape.",
//       "With a pretrained CNN, I tried using transfer learning. This method extracts basic properties like edges from the initial layers of a pretrained CNN."
//     ],
//     "techStack": ["Python", "Pycharm"]
//   }
