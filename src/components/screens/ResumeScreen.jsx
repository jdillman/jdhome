import React from 'react';
import resume from 'data/resume.json';

import 'css/ResumeScreen.css';

function ResumeScreen() {
  return (
    <div>
      <section className="resume-header">
        <h2>Jonathan Dillman</h2>
        <ul>
          <li>San Jose, CA</li>
          <li>619-459-5447</li>
        </ul>
      </section>
      <section>
        <div className="column">
          <p>{resume.objective}</p>
        </div>
      </section>
    </div>
  );
}

export default ResumeScreen;
