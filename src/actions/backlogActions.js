import axios from "axios";
import {
  DELETE_PROJECT_TASK,
  GET_BACKLOG,
  GET_ERRORS,
  GET_PROJECT_TASK,
} from "./types";

export const addProjectTask =
  (backlog_id, project_task, history) => async (dispatch) => {
    try {
      await axios.post(`/backlog/${backlog_id}`, project_task);
      history.push(`/projectBoard/${backlog_id}`);
      dispatch({
        type: GET_ERRORS,
        payload: {},
      });
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      });
    }
  };
export const getBackLog = (backlog_id) => async (dispatch) => {
  try {
    const resData = await axios.get(`/backlog/${backlog_id}`);
    dispatch({
      type: GET_BACKLOG,
      payload: resData.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
