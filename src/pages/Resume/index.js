import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Resume - Total Commercial Experience {moment().diff('31/07/2017', 'years', true).toFixed(2)} years
            </Title>
            <ResumeItem
                date={'Feb 2019 - Present'}
                title={'UI Developer'}
                company={'Tata Consultancy Services'}
                logo={'https://navneetvishwas.com/wp-content/uploads/2019/03/TCS-logo.jpg'}
            >
                • Work on front-end with extensive use of React JS, Redux, JavaScript, HTML, SASS for developing clean, maintainable and highly interactive single page web applications. <br/>
                • Develop CSS with SCSS and BEM from Wireframe-Figma. <a rel="noreferrer" href="https://tjm-forsikring.dk/" target="_blank" >TJM Forsikring</a> <br/>
                • Responsible for design and development of the web pages from Wireframe. <br/>
                • Built RESTFul web services consume them using Angular JS. <br/>
            </ResumeItem>
            <ResumeItem
                date={'July 2017 - Jan 2019'}
                title={'Associate Software Engineer'}
                company={'Autocop India Pvt. Ltd'}
                logo={'https://netajisubhashplace.net/public/UploadFolder/1537342734_Untitleddesign26.png'}
            >
                • Involved in the implementation of the MVC arhitecture Web API for T&A. <br/>
                • Developed clean, maintainable and highly interactive web applications using
                Javascript, Jquery, Ajax, HTML. <br/>
                • Integrated Real Time GPS based vehicle tracking Web Application using Open Street Map with Leaflet.js.<br/>
                
            </ResumeItem>
            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2012 – 2016'}
                title={'RNS Institute Of Technology - VTU'}
                company={'India'}
                logo={'https://image3.mouthshut.com/images/imagesp/925968537s.jpg'}
            >
                Bachelor's Degree in Computer Science and Engineering with First Class Distinction
            </ResumeItem>
        </div>
    );
};

export default Resume;
