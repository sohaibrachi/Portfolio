import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';

import "../../styles/ProjectDisplay.css"



function ProjectDisplay() {
  const {id} = useParams();
  const Project = ProjectList[id];
  return (
    <div className='project'>
      <h1>{Project.name} </h1>
      <img src={Project.image} />
      <p> 
        <b>Skills:</b> {Project.skills}
      </p>
      <a href={Project.link}><GitHubIcon/></a> 
    </div>
  )
}

export default ProjectDisplay