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

        //Read
        // case("READING_BOOK")://idk what im doing here lol
        //     return {...state, loading:true}
        // case("BOOK_READ")://idk what im doing here lol
        //     debugger
        //     return {...state, loading:false, blogs: state.blogs.filter(blog => blog.id == action.payload)}

        //EDIT
        case("EDITING_BOOK")://idk what im doing here lol
            return {...state, loading:true}
        case("BOOK_EDITED")://idk what im doing here lol
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

