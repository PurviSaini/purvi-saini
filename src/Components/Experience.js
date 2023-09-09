import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience(){
    return (
        <div className="my-5">
        <h1 id="experience">Experience</h1>

        <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Open Source Contributor</h3>
          <h4 className="vertical-timeline-element-subtitle">Girl Script Summer of Code</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Open Source Contributor</h3>
          <h4 className="vertical-timeline-element-subtitle">JGEC Winter of Code</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Open Source Contributor</h3>
          <h4 className="vertical-timeline-element-subtitle">Hacktoberfest</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    );
}
export default Experience;