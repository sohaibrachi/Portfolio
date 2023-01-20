import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Home/Home.css";
import Car from "../../assets/car.jpg";

function Home() {
  return (
    <div className='home' >
      <div className='about' style={{backgroundImage: `url(${Car })` }}>
        <h2> Hi, My Name is Sohaib</h2>
        <div className='prompt'>
        <p> A Front-end developer with a passion for learning and creating.</p>
        <a href="https://contacts.google.com/u/1/person/c2122502750525645938"><MailIcon/></a>
        <a href="https://www.linkedin.com/in/djallel-eddine-sohaib-rachi-791568260/"><LinkedInIcon/></a>
        <a href="https://github.com/sohaibrachi"><GitHubIcon/></a>  
        </div>
      </div>
      <div className='skills'> 
        <h1>Skills</h1>
        <ol className='list'>
          <li>
            <h4>Fron-end</h4>
              <span className='item'>JavaScript , React.js , Html , CSS , MaterialUI , StyledComponents , Redux</span>
          </li>
          
        </ol>
      </div>
    </div>
  )
}

export default Home