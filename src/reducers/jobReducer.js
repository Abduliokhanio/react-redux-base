export default (state = {jobs: [], loading: false}, action) => {
    switch(action.type){

        //cases go here
        case("LOADING_JOBS"):
            debugger
            return {...state, loading:true}
        case("JOBS_LOADED"):
            debugger
            return {...state, loading:false, jobs: action.payload}

        default:
            return state
    }

}