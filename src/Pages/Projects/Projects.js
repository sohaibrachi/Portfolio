import React from 'react';
import ProjectItem from '../../Components/ProjectItem'
import { ProjectList } from '../../helpers/ProjectList';

import "../../styles/Project.css"


function Projects() {
  return (
    <div className='projects'>
      <h1 className='projectTitle'>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((Project ,idx)=>{
          return <ProjectItem 
          id={idx}
          name={Project.name} 
          image={Project.image} />
        })}
      </div>

    </div>
  ) 
}

export default Projects