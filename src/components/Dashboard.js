import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions';
import CreateProjectButton from './Project/CreateProjectButton';
import ProjectItem from './Project/ProjectItem';
import PropTypes from "prop-types";

class Dashboard extends Component {
    //lifecyclehook
    componentDidMount() {
        this.props.getProjects()
    }
    render() {
        //for testing only
        // const projectObject = {
        //     projectName: "Project name Props",
        //     projectIdentifier: "Project id props",
        //     description: "description props",
        //     start_date: "start_date props",
        //     end_date: "end_date props"
        // }

        //verify this in redux state on how the props aranges
        //const projectObject = this.props.project.projects;  old way
        const { projects } = this.props.project; //better way es6
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br />
                            <CreateProjectButton />
                            <br />
                            <hr />
                            {
                                // we can map this since this is a list
                                projects.map(pr => (
                                    <ProjectItem key={pr.id} project={pr} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Dashboard.propTypes = {
    project: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
};
const mapToStateProps = state => ({
    project: state.project
});
export default connect(mapToStateProps, { getProjects })(Dashboard);
