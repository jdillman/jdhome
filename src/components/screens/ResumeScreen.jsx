/**
 * Resume screen
 *
 * Reads resume.json to display a simple html resume
 *
 */

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
      showingAnnotation: true,
    };
  }

  render() {
    const { author, objective, skills, experience } = resume;

    return (
      <div>
        <section className="resume-header">
          <ResumeContact author={author} />
        </section>
        <section className="resume-body">
          <div className="resume-section">
            <h3>Objective</h3>
            <p className="text">{objective}</p>
          </div>
          <div className="resume-section">
            <h3>Skills</h3>
            { Object.keys(skills).map(cat => (
              <ul key={cat} className={`skill-list ${cat}`}>
                { skills[cat].map(item => <li key={item}>{item}</li>) }
              </ul>
            )) }
          </div>
          <div className="resume-section">
            <h3>Experience</h3>
            <ResumeJobs jobs={experience} />
          </div>
        </section>
      </div>
    );
  }
}

function ResumeJobs(props) {
  const jobs = props.jobs || [];

  return jobs.map(job => (
    <div key={job.company} className="job">
      <span>{job.company}</span>
      <span>, {job.city}</span>
      <span>{job.dateRange}</span>
      { job.positions.map(position => (
        <div key={position.title} className="position">
          <h3>{position.title}</h3>
          <ul>
            {
              position.tasks.map(task => (
                <li key={task}><p>{task}</p></li>
              ))
            }
          </ul>
        </div>
      ))
      }
    </div>
  ));
}

function ResumeContact(props) {
  const contact = props.author;
  const emailLink = `mailto:${contact.email}`;

  return (
    <div className="resume-contact">
      <h2><a title="Google doc resume" href={Urls.RESUME}>{contact.name}</a></h2>
      <div className="contact">
        <span>{contact.name} - </span>
        <span>{contact.phone} - </span>
        <span><a href={emailLink}>{contact.email}</a></span>
      </div>
      <div className="icons">
        <a className="github" href={Urls.GITHUB}>
          <img alt="" src={githubIcon} />
        </a>
        <a className="github" href={Urls.LINKEDIN}>
          <img alt="" src={LinkedInIcon} />
        </a>
      </div>
    </div>
  );
}

export default ResumeScreen;
