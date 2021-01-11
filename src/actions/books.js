import { useDispatch } from "react-redux"
//action obeject creator function
export const getBooks = () => {
    return dispatch => {
        dispatch({type: "LOADING_BOOKS"})
        fetch("/blocks")
        .then(res => res.json())
        .then(books => dispatch({type: "BOOKS_LOADED", payload: books}))
    }
}

export const addBook = (book) => {
    return dispatch => {
        dispatch({type: "ADDING_BOOK"})
        fetch("/blocks",{
            method: "POST",
            body: JSON.stringify(book),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(book => dispatch({type: "BOOK_ADDED", payload: book}))
    }
}

export const deleteBook = (id) => {
    return dispatch => {
        dispatch({type: "DELETENG_BOOK"})
        fetch(`/blocks/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => dispatch({type: "BOOK_DELETED", payload: id}))
    }
}

export const editBook = (bookpassed) => { 
    let book = {title: bookpassed.title, description: bookpassed.description}
    return dispatch => {
        dispatch({type: "EDITING_BOOK"})
        fetch(`/blocks/${bookpassed.id}`,{
            method: 'PATCH',
            body: JSON.stringify(book),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => dispatch({type: "BOOK_EDITED", payload: bookpassed}))
    }
}

// export const readBook = (book) => { //needs to work
//     const id = book.firstElementChild.id
//     debugger
//     const editedBook = {title: , description: }
//     return dispatch => {
        
//         dispatch({type: "READING_BOOK"})
//         fetch(`/blocks/${id}`)
//         .then(res => res.json())
//         .then(() => dispatch({type: "BOOK_READ", payload: book}))
//     }
// }
