export const getJobs = () => {
    return dispatch => {
        dispatch({type: "LOADING_JOBS"})
        fetch("/jobs")
        .then(res => res.json())
        .then(jobs => dispatch({type: "JOBS_LOADED", payload: jobs}))
    }
}

export const addJob = (job) => {
    return dispatch => {
        dispatch({type: "ADDING_JOB"})
        fetch("/jobs",{
            method: "POST",
            body: JSON.stringify(job),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(job => {dispatch({type: "JOB_ADDED", payload: job})})
    }
}

export const editJob = (jobpassed) => {
    let job = {title: jobpassed.title, description: jobpassed.description}
    return dispatch =>{
        dispatch({type: "EDITING_JOB"})
        fetch(`/jobs/${jobpassed.id}`,{
            method: 'PATCH',
            body: JSON.stringify(job),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        // .then(() => dispatch({type: "BOOK_EDITED", payload: jobpassed})) dont need this 
    }
}