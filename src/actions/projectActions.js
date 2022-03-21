import axios from "axios";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS } from "./types";

const API_URL = "http://localhost:8080/api/project";

export const createProject = (project, history) => async dispatch => {
    try {
        await axios.post(API_URL, project);
        history.push("/dashboard");
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}

export const getProjects = () => async dispatch => {
    const resData = await axios.get(API_URL + "/all");
    dispatch({
        type: GET_PROJECTS,
        payload: resData.data
    });
}
export const getProject = (projectId, history) => async dispatch => {
    const resData = await axios.get(API_URL + `/${projectId}`);
    dispatch({
        type: GET_PROJECT,
        payload: resData.data
    });

}