import React from 'react';
import { Route, Link } from 'react-router-dom';

import Urls from 'lib/urls';
import ItemScreen from 'components/screens/ItemScreen';

import 'css/common/reset.css';
import 'css/App.css';

function HomeScreen() {
  return <a href={Urls.GITHUB}>Reactor Bootstrap</a>;
}

function App() {
  return (
    <div className="app">
      <header className="app-header">Header</header>
      <main className="app-main">
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/item">Item</Link>
          <ul>
            <Link to="/item/123">123</Link>
            <Link to="/item/abc">abc</Link>
          </ul>
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
