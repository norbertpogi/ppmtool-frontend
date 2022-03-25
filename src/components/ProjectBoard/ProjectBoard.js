import React, { Component } from 'react'
import ProjectTask from './ProjectTasks/ProjectTask';
import { Link } from 'react-router-dom';

class ProjectBoard extends Component {

    render() {
        const { id } = this.props.match.params;
        return (
            <div className="container">
                <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <br />
                <hr />
                {/*-- Backlog STARTS HERE -->*/}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-white">
                                    <h3>TO DO</h3>
                                </div>
                            </div>
                            <ProjectTask />
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-primary text-white">
                                    <h3>In Progress</h3>
                                </div>
                            </div>
                            { /*SAMPLE PROJECT TASK STARTS HERE */}

                            {/*-- SAMPLE PROJECT TASK ENDS HERE -->*/}
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-success text-white">
                                    <h3>Done</h3>
                                </div>
                            </div>
                            {/*-- SAMPLE PROJECT TASK STARTS HERE --*/}

                            {/*-- SAMPLE PROJECT TASK ENDS HERE -->*/}
                        </div>
                    </div>
                </div>

                {/*-- Backlog ENDS HERE --*/}
            </div>
        )
    }

}
export default ProjectBoard;
