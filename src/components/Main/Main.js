import React from 'react';
import './Main.css';
import Projects from '../Projects/Projects';
import projects from '../../data/projects';
import Contact from '../Contact/Contact';

const Main = () => (
  <div className="site-content">
    <div className="works">
      <h2><a href="#works">Works</a><hr /></h2>
    </div>
    <div className="project-group">
      {projects.map(p => (
        <Projects key={p.title} proj={p} />))}
    </div>
    <div className="contact">
      <h2><a href="#contact">Contact Me</a><hr /></h2>
      <Contact />
    </div>
  </div>
);

export default Main;
