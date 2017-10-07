import React from 'react';
import resume from 'data/resume.json';
import Urls from 'lib/urls';

import 'css/ResumeScreen.css';

import githubIcon from 'images/github.svg';
import LinkedInIcon from 'images/linkedin.svg';

class ResumeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showConfirm: true,
    };
  }

  render() {
    const skills = Object.keys(resume.skills).map(cat => (
      <ul className={cat}>
        { resume.skills[cat].map(skill => <li key={skill}>{skill}</li>) }
      </ul>
    ));

    return (
      <div>
        <section className="resume-header">
          <h2><a title="Google doc resume" href={Urls.RESUME}>Jonathan Dillman</a></h2>
          <div className="contact">
            <span>San Jose, CA - </span>
            <span>619-459-5447 - </span>
            <span><a href="mailto:jdd619@gmail.com">jdd619@gmail.com</a></span>
          </div>
          <div className="icons">
            <a className="github" href={Urls.GITHUB}>
              <img alt="" src={githubIcon} />
            </a>
            <a className="github" href={Urls.LINKEDIN}>
              <img alt="" src={LinkedInIcon} />
            </a>
          </div>
        </section>
        <section className="resume-body">
          <div className>
            <h3>Objective</h3>
            <p>{resume.objective}</p>
          </div>
          <h3>Skills</h3>
          { skills }
        </section>
      </div>
    );
  }
}

export default ResumeScreen;
