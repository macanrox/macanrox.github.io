import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody } from 'reactstrap';
import './Projects.css';
import projects from '../../data/projects';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proj: JSON.parse(JSON.stringify(projects)),
    };
  }

  render() {
    const project = this.state.proj;
    console.log(project[0].imageSrc);

    return (
      <Card>
        <CardImg top width="100%" src={project.imageSrc} alt="Card image cap" />
        <CardBody>
          <CardTitle id="project-link"><a href={'source'}>{'title'}</a></CardTitle>
          <CardSubtitle className="text-muted">{project.role}</CardSubtitle>
          <CardText>
            {project.description}
            <br />
            <br />
            <span className="tech-dev-icons">
              <span className="text-muted">built with {' '}</span>
              <br />
              <span id="dev-icons">
                { project.map((e) => e.tech.map((techs) => <span className={`devicon-${techs}`} />)) }
              </span>
              <span id="no-dev-icons">
              {/* {project.map((e) => {
                return {e.otherTech.map((otherTechs) => {
                  return <span>{`${otherTechs}`}</span>;
                }).join(', ')}
              })} */}
              </span>
            </span>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Projects;
