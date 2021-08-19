import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from '../redux/profileReducer'
import listsReducer from "./listsReducer";
import filtersReducer from "./filtersReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profileInfo: profileReducer,
    moviesLists: listsReducer,
    filters: filtersReducer,
});

let store = createStore(reducers,applyMiddleware(thunk));

export default store;