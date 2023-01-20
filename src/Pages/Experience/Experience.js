import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement, 
} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School'


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date='2017 - 2019'
          iconStyle={{background:"#3e497a", color:"#fff" }}
          icon={<SchoolIcon/>}
          >
            <h3 className='vertical-timeLine-element-title'>High School Diploma</h3>
           
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date='2019 -2022 '
          iconStyle={{background:"#3e497a", color:"#fff" }}
          icon={<SchoolIcon/>}
          >
            <h3 className='vertical-timeLine-element-title'>Usto University</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date='2022 - 2023'
          iconStyle={{background:"#3e497a", color:"#fff" }}
          icon={<SchoolIcon/>}
          >
            <h3 className='vertical-timeLine-element-title'>Front-End Web Developer</h3>
            <p style={{color: "#000" }}> study hard everyday and learn new skills and new things with a big power and passion </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience