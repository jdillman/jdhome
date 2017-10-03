import React from 'react';
import { Route, Link } from 'react-router-dom';

import Urls from 'lib/urls';
import ItemScreen from 'components/screens/ItemScreen';

import resume from 'data/resume.json';

import 'css/common/base.css';
import 'css/common/reset.css';
import 'css/common/themes.css';
import 'css/App.css';

console.log(resume);
function HomeScreen() {
  return (
    <div>
      <p>Im a Front End Engineer from the bay area specialing in webapps.</p>
      <a href={Urls.GITHUB}>Github</a>
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
          <Link to="/portfolio/react-multi-select">Multiselect</Link>
        </nav>
        <section className="main-content">
          <Route exact path="/" component={HomeScreen} />
          <Route path="/item/:itemId" component={ItemScreen} />
          <Route
            path="/item"
            exact
            render={() => (
              <span>No Item selected</span>
            )}
          />
        </section>
      </main>
      <footer className="app-footer">Footer</footer>
    </div>
  );
}

export default App;
