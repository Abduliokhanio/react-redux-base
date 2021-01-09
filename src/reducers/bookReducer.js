export default (state = {books: [], loading: false}, action) => {
    switch(action.type){

        case("LOADING_BOOKS"):
            return {...state, loading:true}
        case("BOOKS_LOADED"):
            return {...state, loading:false, books: action.payload}
        default: 
            return state

    }
}

