import React from 'react';
import { Route, Link } from 'react-router-dom';

import Urls from 'lib/urls';

import resume from 'data/resume.json';

import 'css/common/base.css';
import 'css/common/reset.css';
import 'css/common/themes.css';
import 'css/App.css';

console.log(resume);
function HomeScreen() {
  return (
    <div>
      <p>Hi, Im Jonathan</p>
      <a title="My github" href={Urls.GITHUB}>Github</a>
      <a title="My github" href={Urls.LINKEDIN}>LinkedIn</a>
      <article>Blah blah blah, opinion opinion opinion</article>
    </div>
  );
}

function AboutScreen() {
  return (
    <div>
      About me. Husband, father, runner
    </div>
  );
}

function ResumeScreen() {
  return (
    <div>
      <h2>Jonathan Dillman</h2>
      <ul>
        <li>San Jose, CA</li>
        <li>619-459-5447</li>
        <li><a href={Urls.GITHUB}>github</a></li>
        <li><a href="mailto:jdd619+resume@gmail.com">jdd619</a></li>
      </ul>
      <section>
        <div className="column">
          <p>{resume.objective}</p>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>JonathanDillman.com</h1>
      </header>
      <main className="app-main">
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
        </nav>
        <section className="main-content">
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route path="/resume" component={ResumeScreen} />
        </section>
      </main>
      <footer className="app-footer">Footer</footer>
    </div>
  );
}

export default App;
