import {combineReducers} from 'redux'
import blogReducer from "./blogReducer"
import jobReducer from "./jobReducer"


const rootReducer = combineReducers({
    blogReducer,
    jobReducer
})

export default rootReducer