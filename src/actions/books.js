//action obeject creator function
export const getBooks = () => {
    return dispatch => {
        dispatch({type: "LOADING_BOOKS"})
        fetch("/blogs")
        .then(res => res.json())
        .then(books => dispatch({type: "BOOKS_LOADED", payload: books}))
    }
}

export const addBook = (book) => {
    return dispatch => {
        dispatch({type: "ADDING_BOOK"})
        console.log("C")
        fetch("/blogs",{
            method: "POST",
            body: JSON.stringify(book),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(book => {
            console.log("e")
            dispatch({type: "BOOK_ADDED", payload: book})})
        console.log("d") //asynk process which is why its after c  
    }
}

export const deleteBook = (id) => {
    return dispatch => {
        dispatch({type: "DELETENG_BOOK"})
        fetch(`/blogs/${id}`,{
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
        fetch(`/blogs/${bookpassed.id}`,{
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

