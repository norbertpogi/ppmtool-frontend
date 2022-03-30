import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ProjectTask extends Component {
  render() {
    const { project_task } = this.props;
    let priorityColorCode;
    let priorityStatus;
    if(project_task.priority === 1) {
      priorityColorCode = 'bg-danger text-light';
      priorityStatus = "HIGHT";
    }
    if(project_task.priority === 2) {
      priorityColorCode = 'bg-warning text-light';
      priorityStatus = "MEDIUM";
    }
    if(project_task.priority === 3) {
      priorityColorCode = 'bg-info text-light';
      priorityStatus = "LOW";
    }
    return (
      <div className="card mb-1 bg-light">
        <div className={`card-header text-primary ${priorityColorCode}`}>
          ID: {project_task.projectSequence} -- Priority: {priorityStatus}          
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{project_task.summary}</h5>
          <p className="card-text text-truncate ">
            {project_task.acceptanceCriteria}
          </p>          
          <Link to={`/updateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`} className="btn btn-primary">
            View / Update
          </Link>
          <button className="btn btn-danger ml-4">Delete</button>
        </div>
      </div>
    );
  }
}
export default ProjectTask;
