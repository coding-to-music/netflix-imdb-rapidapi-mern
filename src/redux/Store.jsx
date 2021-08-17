import {combineReducers, createStore} from "redux";
import profileReducer from '../redux/profileReducer'
import listsReducer from "./listsReducer";
import filtersReducer from "./filtersReducer";

let reducers = combineReducers({
    profileInfo: profileReducer,
    filmLists: listsReducer,
    filters: filtersReducer,
});

let store = createStore(reducers);

export default store;