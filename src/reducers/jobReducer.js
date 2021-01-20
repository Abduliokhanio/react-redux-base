export default (state = {jobs: [], loading: false}, action) => {
    switch(action.type){

        //cases go here
        case("LOADING_JOBS"):
            return {...state, loading:true}
        case("JOBS_LOADED"):
            return {...state, loading:false, jobs: action.payload}


        //CREATE
        case("ADDING_JOB"):
            return {...state, loading:false, job: action.payload}
        case("JOB_ADDED"):
            return {...state, loading:false, jobs: [...state.jobs, action.payload] }



        default:
            return state
    }

}