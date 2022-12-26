import userReducer from "./userreducer";
import {combineReducers} from "redux"

const myReducers = combineReducers({
    user: userReducer,
})

export default myReducers;