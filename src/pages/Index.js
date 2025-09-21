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
            <Link to="/">Home</Link>
          </h2>
        </div>
      </header>
      <p>
        Welcome to my personal website!
        I&apos;m Rukhshan, a data consultant based in Lahore, Pakistan.
      </p>
      <p>
        I specialize in leveraging quantitative tools to drive informed
        decision-making across diverse sectors.
        My recent experience includes working as a Data Analyst
        at an agri-tech startup, as well as collaborating with non-profit
        and public sector agencies in the US to deliver impactful
        data analytics solutions. I thrive on tackling challenging problems and
        I am committed to helping organizations unlock the full potential of their data.
        In my free time, you&apos;ll find me on the football field,
        experimenting with new recipes in the kitchen,
        or planning my next travel adventure.
      </p>
      <p>
        Feel free to check out my{' '}
        <strong><Link to="/resume">resume</Link></strong>, <strong><Link to="/projects">projects</Link></strong>,{' '}  or{' '}
        <strong><Link to="/contact">contact</Link></strong> me.
        I am open to globally remote opportunities,
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
