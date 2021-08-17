import {combineReducers, createStore} from "redux";
import profileReducer from '../redux/profileReducer'
import listsReducer from "./listsReducer";

let reducers = combineReducers({
    profileInfo: profileReducer,
    filmLists: listsReducer,
});

let store = createStore(reducers);

export default store;