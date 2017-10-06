import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Urls from 'lib/urls';
import ResumeScreen from 'components/screens/ResumeScreen';

import 'css/common/reset.css';
import 'css/common/base.css';
import 'css/common/themes.css';
import 'css/App.css';

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
      About me. Husband, father, geek, runner
    </div>
  );
}

function Customizer() {
  return null;
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="header">JonathanDillman.com</h1>
      </header>
      <main className="app-main">
        <section className="column">
          <nav className="main-nav">
            <NavLink activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/resume">Resume</NavLink>
            <NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink>
          </nav>
        </section>
        <section className="main-content">
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route path="/resume" component={ResumeScreen} />
        </section>
      </main>
      <Customizer />
      <footer className="app-footer">Footer</footer>
    </div>
  );
}

export default App;
