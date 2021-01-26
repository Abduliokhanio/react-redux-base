//action obeject creator function
//always include a .catch
// alwyas validate as well
//validate on both the front and back 

export const getBlogs = () => {
    return dispatch => {
        dispatch({type: "LOADING_BOOKS"})
        fetch("/blogs")
        .then(res => res.json())
        .then(blogs => dispatch({type: "BOOKS_LOADED", payload: blogs}))
    }
}

export const addBlog = (blog) => {
    return dispatch => { //thunk allows us to do asyn actions 
        dispatch({type: "ADDING_BOOK"})
        console.log("C")
        fetch("/blogs",{
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(blog => {
            console.log("e")
            dispatch({type: "BOOK_ADDED", payload: blog})})
        console.log("d") //asynk process which is why its after c  
    }
}

export const deleteBlog = (id) => {
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

export const editBlog = (blogpassed) => { 
    let blog = {title: blogpassed.title, description: blogpassed.description}
    return dispatch => {
        dispatch({type: "EDITING_BOOK"})
        fetch(`/blogs/${blogpassed.id}`,{
            method: 'PATCH',
            body: JSON.stringify(blog),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => dispatch({type: "BOOK_EDITED", payload: blogpassed}))
    }
}

