import React, { Component } from 'react';
import './Main.css';
import projects from '../../data/projects';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proj: JSON.parse(JSON.stringify(projects)),
    }
  }

  renderProject(project) {
    return project.map((item, index) => (
      <Projects 
        key={index.id} 
        title={item.title}
        source={item.source}
        description={item.description}
        image={item.image}
        role={item.role}
        tech={item.tech.map((e) => <span className={`devicon-${e}`}></span>)}
        otherTech={item.otherTech.map((e) => <span>{`${e} `}</span>)}
        />))
  }

  render() {
    const project = this.state.proj;

    return (
      <div className="site-content">
        <div className="works">
          <h2><a href="#works">Works</a><hr /></h2>
          <div className="project-group">
            <div className="row">
              {this.renderProject(project)}
            </div>
          </div>
        </div>
        <div className="contact-header">
          <h2 id="contact-me"><a href="#contact">Contact Me</a><hr /></h2>
          <Contact />
        </div>
      </div>
    );
  }
}

export default Main;
