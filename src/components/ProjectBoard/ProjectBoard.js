import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backlog from "./Backlog";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBackLog } from "../../actions/backlogActions";

class ProjectBoard extends Component {
  //constructor to handle errors
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBackLog(id);
  }

  render() {
    const { id } = this.props.match.params;
    const { project_tasks } = this.props.backlog;
    const { errors } = this.state;
    let boardContent;
    const boardAlgorithm = (errors, project_tasks) => {
      if (project_tasks.length < 1 || errors.projectIdentifier) {
        return (
          <div className="alert alert-danger text-center" role="alert">
            No Project Tasks on this board
          </div>
        );
      }
      return <Backlog project_task_prop={project_tasks} />;
    };
    boardContent = boardAlgorithm(errors, project_tasks);
    return (
      <div className="container">
        <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />

        {boardContent}
      </div>
    );
  }
}
ProjectBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  backlog: state.backlog,
  errors: state.errors,
});
export default connect(mapStateToProps, { getBackLog })(ProjectBoard);
