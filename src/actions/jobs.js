export const getJobs = () => {
    return dispatch => {
        dispatch({type: "LOADING_JOBS"})
        fetch("/jobs")
        .then(res => res.json())
        .then(jobs => dispatch({type: "JOBS_LOADED", payload: jobs}))
    }
}