import React from 'react';
import { Route } from 'react-router-dom';
import ResumeScreen from 'components/screens/ResumeScreen';

import 'css/common/reset.css';
import 'css/common/base.css';
import 'css/common/themes.css';
import 'css/App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="header">JonathanDillman.com</h1>
      </header>
      <main className="app-main">
        <section className="main-content">
          <Route path="/" component={ResumeScreen} />
        </section>
      </main>
    </div>
  );
}

export default App;
