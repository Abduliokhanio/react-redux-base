export default (state = {books: [], loading: false}, action) => {
    switch(action.type){

        case("LOADING_BOOKS"):
            return {...state, loading:true}
        case("BOOKS_LOADED"):
            return {...state, loading:false, books: action.payload}
        case("ADDING_BOOK"):
            return {...state, loading:false, book: action.payload}
        case("BOOK_ADDED"):
            return {...state, loading:false, books: [...state.books, action.payload] }
        case("DELETENG_BOOK"):
            return {...state, loading:false, book: action.payload}
        case("BOOK_DELETED"):
            return {...state, loading:false, books: state.books.filter(book => book.id != action.payload) }
        default: 
            return state
    }
}

