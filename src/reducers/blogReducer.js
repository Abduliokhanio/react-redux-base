export default (state = {blogs: [], loading: false}, action) => {
    switch(action.type){

        //INDEX
        case("LOADING_BOOKS"):
            return {...state, loading:true}
        case("BOOKS_LOADED"):
            return {...state, loading:false, blogs: action.payload}

        //CREATE
        case("ADDING_BOOK"):
            return {...state, loading:false, blog: action.payload}
        case("BOOK_ADDED"):
            return {...state, loading:false, blogs: [...state.blogs, action.payload] }

        //EDIT
        case("EDITING_BOOK"):
            return {...state, loading:true}
        case("BOOK_EDITED"):
            return {...state, loading:false, blogs: [...state.blogs, action.payload]}

        //DELETE
        case("DELETENG_BOOK"):
            return {...state, loading:false, blog: action.payload}
        case("BOOK_DELETED"):
            return {...state, loading:false, blogs: state.blogs.filter(blog => blog.id != action.payload) }

        //DEFAULT
        default: 
            return state
    }
}

