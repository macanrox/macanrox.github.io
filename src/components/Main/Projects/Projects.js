import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody } from 'reactstrap';
import './Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      source: props.source,
      description: props.description,
      image: props.image,
      role: props.role,
      tech: props.tech,
      otherTech: props.otherTech
    }
  }

  render() {
    const project = this.state;
    console.log(project.image);

    return (
      <Card className="col-6 col-md-4 col-lg-3 mb-4">
        <CardImg top width="100%" src={project.image} alt="" />
        <CardBody>
          <CardTitle id="project-link"><a href={project.source}>{project.title}</a></CardTitle>
          <CardSubtitle className="text-muted">{project.role}</CardSubtitle>
          <CardText>
            {project.description}
            <br />
            <br />
            <span className="tech-dev-icons">
              <span className="text-muted">built with</span>
              <br />
              <span id="dev-icons">
                {project.tech}
              </span>
              &nbsp;
              <span id="no-dev-icons">
              {project.otherTech}
              </span>
            </span>
          </CardText>
        </CardBody>
      </Card>
    );
  }

}//end of class Projects

export default Projects;
