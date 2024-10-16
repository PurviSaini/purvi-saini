import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience(){
    return (
        <div className="my-5 p-2 border border-dark">
        <h2 id="experience">Experience</h2>

        <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: '#0C011B', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  #A1EBE3' }}
          date="October'23 - present"
          iconStyle={{ background: '#A1EBE3', color: 'white' }}
        >
          <h3 className="vertical-timeline-element-title p-1">Mentor | Web Development</h3>
          <h4 className="vertical-timeline-element-subtitle fs-6 fst-italic pb-1 ">Lean In IGDTUW</h4>
          <p>
          Mentor for Web Development Circle. Mentoring and teaching 45+ students the crucial concepts of HTML and CSS to 
start their Website Development journey.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#0C011B', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  yellow' }}
          date="September'23 - present"
          iconStyle={{ background: 'yellow', color: 'white' }}
        >
          <h3 className="vertical-timeline-element-title p-1">Associate | Website Team</h3>
          <h4 className="vertical-timeline-element-subtitle fs-6 fst-italic pb-1 ">Taarangana: Cultural Fest Society of IGDTUW</h4>
          <p>
          Leading a team to build the society's Website for the fest.Created Team Page, added animation, graphics, and CSS borders to images to enhance engagement and visibility
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#0C011B', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  yellow' }}
          date="June'23 - August'23"
          iconStyle={{ background: '#A1EBE3', color: 'white' }}
        >
          <h3 className="vertical-timeline-element-title p-1">Girl Script Summer of Code</h3>
          <h4 className="vertical-timeline-element-subtitle fs-6 fst-italic pb-1 ">Open Source Contributor</h4>
          <p>
          Made contributions in a website that provide free resources for different categories.
Fixed documentation bugs, added new categories and added free tools.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: '#0C011B', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  #A1EBE3' }}
          date="February'23 - March'23"
          iconStyle={{ background: 'yellow', color: 'white' }}
          
        >
          <h3 className="vertical-timeline-element-title p-1">JGEC Winter of Code</h3>
          <h4 className="vertical-timeline-element-subtitle fs-6 fst-italic pb-1 ">Open Source Contributor</h4>
          <p>
          Contributed to javascript based game. Major contribution was correcting
the responsiveness of the website for different screen size using css media queries.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: '#0C011B', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  yellow' }}
          date="October'22 - September'22"
          iconStyle={{ background: '#A1EBE3', color: 'white' }}
        >
          <h3 className="vertical-timeline-element-title p-1">Hacktoberfest</h3>
          <h4 className="vertical-timeline-element-subtitle fs-6 fst-italic pb-1 ">Open Source Contributor</h4>
          <p>
          Started open source journey with Hacktoberfest, attained knowledge of open source, git version
control and github. Contributed to DSA questions repository, created UI from scratch.
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          contentStyle={{ background: '#0C011B', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  #A1EBE3' }}
          date="October'21- October'22"
          iconStyle={{ background: 'yellow', color: 'white' }}
        >
          <h3 className="vertical-timeline-element-title p-1">Coordinator | Creative Team</h3>
          <h4 className="vertical-timeline-element-subtitle fs-6 fst-italic pb-1 ">Odinateur: Computer Science Society of Hansraj College</h4>
          <p>
          Created digital content, wrote scripts, lead the team and edited videos for the society.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    );
}
export default Experience;