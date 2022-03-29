import React, { Component } from "react";
import ProjectTask from "./ProjectTasks/ProjectTask";

class Backlog extends Component {
  render() {
    const { project_task_prop } = this.props;
    const tasks = project_task_prop.map((pt_task) => (
      <ProjectTask key={pt_task.id} project_task={pt_task} />
    ));

    let dotoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    tasks.forEach((n) => {
      let itemValue = n.props.project_task.status;

      if (itemValue === "IN_PROGRESS") {
        inProgressItems.push(n);
      }
      if (itemValue === "TO_DO") {
        dotoItems.push(n);
      }
      if (itemValue === "DONE") {
        doneItems.push(n);
      }
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-secondary text-white">
                <h3>TO DO</h3>
              </div>
            </div>
            {dotoItems}
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-primary text-white">
                <h3>In Progress</h3>
              </div>
            </div>
            {inProgressItems}
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-success text-white">
                <h3>Done</h3>
              </div>
            </div>
            {doneItems}
          </div>
        </div>
      </div>
    );
  }
}
export default Backlog;
