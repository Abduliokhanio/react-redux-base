//action obeject creator function

export const getBooks = () => {
    return dispatch => {
        dispatch({type: "LOADING_BOOKS"})
        fetch("/blocks")
        .then(res => res.json())
        .then(books => dispatch({type: "BOOKS_LOADED", payload: books}))
    }
}