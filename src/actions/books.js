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

export const editBook = (id) => {
    let book = {title: "", description: ""}
    debugger
    return dispatch => {
        dispatch({type: "EDITING_BOOK"})
        fetch(`/blocks/${id}`,{
            method: 'PATCH',
            body: JSON.stringify(book),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => dispatch({type: "BOOK_EDITED", payload: id}))
    }
}
