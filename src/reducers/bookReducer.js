export default (state = {books: [], loading: false}, action) => {
    switch(action.type){

        //INDEX
        case("LOADING_BOOKS"):
            return {...state, loading:true}
        case("BOOKS_LOADED"):
            return {...state, loading:false, books: action.payload}

        //CREATE
        case("ADDING_BOOK"):
            return {...state, loading:false, book: action.payload}
        case("BOOK_ADDED"):
            return {...state, loading:false, books: [...state.books, action.payload] }

        //READ
        case("EDITING_BOOK")://idk what im doing here lol
            return {...state, loading:true}
        case("BOOK_EDITED")://idk what im doing here lol
            return {...state, loading:false, books: [...state.books, action.payload]}

        //DELETE
        case("DELETENG_BOOK"):
            return {...state, loading:false, book: action.payload}
        case("BOOK_DELETED"):
            return {...state, loading:false, books: state.books.filter(book => book.id != action.payload) }

        //DEFAULT
        default: 
            return state
    }
}

