import axios from "axios";
import { DELETE_PROJECT, GET_ERRORS, GET_PROJECT, GET_PROJECTS } from "./types";

export const createProject = (project, history) => async dispatch => {
    try {
        await axios.post("/", project);
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}

export const getProjects = () => async dispatch => {
    const resData = await axios.get("/all");
    dispatch({
        type: GET_PROJECTS,
        payload: resData.data
    });
}
export const getProject = (id, history) => async dispatch => {
    try {
        const resData = await axios.get(`/${id}`);
        dispatch({
            type: GET_PROJECT,
            payload: resData.data
        });
    } catch (error) {
        history.push("/dashboard");
    }

}
export const deleteProject = (id) => async dispatch => {
    if (window.confirm("Are you sure to delete this project?")) {
        await axios.delete(`/${id}`);
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        });
    }

}