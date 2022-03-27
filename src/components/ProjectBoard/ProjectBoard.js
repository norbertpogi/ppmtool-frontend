import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Backlog from './Backlog';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBackLog } from '../../actions/backlogActions';

class ProjectBoard extends Component {
    //constructor to handle errors

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getBackLog(id, this.props.history);
    }

    render() {
        const { id } = this.props.match.params;
        const {project_tasks } = this.props.backlog;
        return (
            <div className="container">
                <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <br />
                <hr />
                <Backlog project_task_prop={project_tasks }/>
            </div>
        )
    }
}
ProjectBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    backlog: state.backlog
});
export default connect(mapStateToProps, { getBackLog })(ProjectBoard);
