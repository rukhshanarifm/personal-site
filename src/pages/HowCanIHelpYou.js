import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const HowCanIHelpYou = () => (
  <Main
    title="How can I help you?"
    description="Learn about how Rukhshan can help you with data analytics and consulting"
  >
    <article className="post" id="how-can-i-help-you">
      <header>
        <div className="title">
          <h2>
            <Link to="/how-can-i-help-you">How can I help you?</Link>
          </h2>
        </div>
      </header>
      <div className="help-content">
        <p>
          I&apos;m a data consultant specializing in leveraging quantitative tools to uncover
          insights and drive decision-making across diverse sectors. Here&apos;s how I can
          help you transform your data into actionable insights:
        </p>

        <h3>Data Analytics & Strategy</h3>
        <ul>
          <li>Design and execute comprehensive data strategies</li>
          <li>Build dashboards and reporting pipelines for business intelligence</li>
          <li>Conduct predictive analytics and machine learning analysis</li>
          <li>Perform data visualization and statistical analysis</li>
          <li>Implement data validation protocols and quality assurance</li>
        </ul>

        <h3>Data Engineering &amp; Infrastructure</h3>
        <ul>
          <li>Build and automate data workflows and reporting processes</li>
          <li>Design and maintain simple databases (PostgreSQL, SQL)</li>
          <li>Set up basic ETL (Extract, Transform, Load) pipelines</li>
          <li>Implementing cloud solutions (AWS, Google Cloud) as needed</li>
        </ul>

        <h3>Technical Training & Capacity Building</h3>
        <ul>
          <li>Deliver data analytics training for teams and organizations</li>
          <li>Teach statistical analysis tools (Python, R, Stata)</li>
          <li>Guide teams through hands-on data science projects</li>
          <li>Develop training materials and documentation</li>
          <li>Mentor junior analysts and data professionals</li>
        </ul>

        <h3>Research & Policy Analysis</h3>
        <ul>
          <li>Support policy research with quantitative analysis</li>
          <li>Provide quantitative support on impact evaluation studies</li>
        </ul>

        <h2><strong>Ready to unlock the power of your data?</strong></h2>
        <h3>Whether you are:</h3>
        <ul>
          <li>A small-to-medium business hoping to optimize operations through analytics</li>
          <li>A non-profit or public agency looking to enhance their data capabilities</li>
          <li>An organization requiring training on modern data tools</li>
          <li>Someone who needs an extra hand to support data initiatives</li>
        </ul>
        <p>
          I&apos;m excited to collaborate and help you achieve your data goals. Feel free to{' '}
          <Link to="/contact">reach out</Link> and let&apos;s discuss how we can work
          together to drive meaningful impact through data.
        </p>
      </div>
    </article>
  </Main>
);

export default HowCanIHelpYou;
