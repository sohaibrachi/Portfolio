import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../footer/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://instagram.com/rch_sohaib'><InstagramIcon/></a> 
        <a href="https://www.facebook.com/profile.php?id=100009177081961"><FacebookIcon/></a>
        <a href="https://www.linkedin.com/in/djallel-eddine-sohaib-rachi-791568260/"><LinkedInIcon/></a>
        <a href="https://github.com/sohaibrachi"><GitHubIcon/></a>
        
      </div>
      <p> &copy; 2023 sohaibtech.com  </p>
      
    </div>
  )
}

export default Footer