import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Rukhshan Arif Mian's personal website. Lahore based UChicago graduate, "
      + ''
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
        With experience as an independent contractor, I am open to globally remote opportunities,
        including short-term projects, long-term contracts, and consulting roles.
      </p>
      {/* <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/rukhshanarifm/personal-site">here</a>.
      </p> */}
    </article>
  </Main>
);

export default Index;
