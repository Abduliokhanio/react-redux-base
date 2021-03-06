//action obeject creator function
//always include a .catch


// thunk allows us to return functions instead of just objects 
//really comes in handy when we need to scale and reuse our 
//actions-object-creators functions
export const getBlogs = () => {
    return dispatch => {
        dispatch({type: "LOADING_BOOKS"})
        fetch("/blogs") 
        .then(res => res.json())
        .then(blogs => dispatch({type: "BOOKS_LOADED", payload: blogs}))
        .catch((error) => {
            console.error('Error:', error);
          })
    }
}

export const addBlog = (blog) => {
    return dispatch => { //thunk allows us to do asyn actions 
        dispatch({type: "ADDING_BOOK"})
        console.log("C")
        fetch("/blogs",{ //initial order The Fetch API provides a JavaScript interface for accessing and manipulating our db, using a requests and responses.
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json()) //promise is returned and we further process it.
        .then(blog => { //another promise is returned and we further process it
            console.log("e")
            dispatch({type: "BOOK_ADDED", payload: blog})})
          
        .catch((error) => {
            console.error('Error:', error);
          })

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
        .catch((error) => {
            console.error('Error:', error);
          })
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
        .catch((error) => {
            console.error('Error:', error);
          })
    }
}

