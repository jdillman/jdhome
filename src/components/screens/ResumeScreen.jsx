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

function ResumeScreen() {
  const { author, objective, skills, experience } = resume;

  return (
    <div>
      <section className="resume-header">
        <ResumeContact author={author} />
      </section>
      <section className="resume-body">
        <div className="resume-section">
          <h3><span>O</span>bjective</h3>
          { objective.map(text => (
            <p className="content text">{text}</p>
          )) }
        </div>
        <div className="resume-section">
          <h3><span>S</span>kills</h3>
          { Object.keys(skills).map(cat => (
            <ul key={cat} className={`list skill-list ${cat}`}>
              { skills[cat].map(item => <li key={item}>{item}</li>) }
            </ul>
          )) }
        </div>
        <div className="resume-section">
          <h3><span>E</span>xperience</h3>
          <div className="content">
            <ResumeJobs jobs={experience} />
          </div>
        </div>
      </section>
    </div>
  );
}

function ResumeJobs(props) {
  const jobs = props.jobs || [];

  return jobs.map(job => (
    <div key={job.company} className="job">
      <span className="company">{job.company}</span>
      <span>{job.city}</span>
      <span className="date">{job.dateRange}</span>
      { job.positions.map(position => (
        <div key={position.title} className="position">
          <p>{position.title}</p>
          <ul>
            {
              position.tasks.map(task => (
                <li className="list" key={task}><p>{task}</p></li>
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
        <span>{contact.location} - </span>
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
