import {moviesAPI} from "../api/moviesAPI";

const CHANGE_LIST = 'CHANGE_LIST';
const ADD_FILM = 'ADD_FILM';
const SET_FILMS_STATE = 'SET_FILMS_STATE';
const SET_SEARCH_FILMS_STATE = 'SET_SEARCH_FILMS_STATE';
const SET_SEARCH_FILM_FULL_STATE = 'SET_SEARCH_FILM_FULL_STATE';

let initialState = {
    movies: [],
    searchMovies: [],
    searchMovie: {},
}


const listsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_LIST: {
            let stateCopy = {
                ...state,
                movies: [...state.movies]
            }
            for (let i = 0; i < state.movies.length; i++) {
                let stateId = state.movies[i].imdbID;
                if (action.id === stateId) {
                    stateCopy.movies[i].list = action.button
                }
            }
            return stateCopy;
        }
        case SET_FILMS_STATE: {
            return {
                ...state, movies: action.movies
            }
        }
        case SET_SEARCH_FILMS_STATE: {
            return {
                ...state, searchMovies: action.movies
            }
        }
        case SET_SEARCH_FILM_FULL_STATE: {
            return {
                ...state, searchMovie: action.movie
            }
        }
        case ADD_FILM: {
            let stateCopy = {
                ...state,
                movies: [...state.movies]
            }
            stateCopy.movies.push(action.movie);
            return stateCopy;
        }
        default:
            return state;
    }
}


export const changeListAC = (button, id) => ({type: CHANGE_LIST, button: button, id: id});
export const setMoviesStateAC = (movies) => ({type: SET_FILMS_STATE, movies: movies});
export const setSearchMoviesStateAC = (movies) => ({type: SET_SEARCH_FILMS_STATE, movies: movies});
export const setSearchMovieFullStateAC = (movie) => ({type: SET_SEARCH_FILM_FULL_STATE, movie: movie});
export const addFilmToState = (movie) => ({type: ADD_FILM, movie})


export const changeListTC = (id, button) => {
    return (dispatch) => {
        dispatch(changeListAC(button, id));
        moviesAPI.changeList(id, button);
    }
}

export const getMoviesTC = () => {
    return (dispatch) => {
        moviesAPI.getMovies().then(response => {
            dispatch(setMoviesStateAC(response.movies))
        })
    }
}

export const searchMoviesTC = (title) => {
    return (dispatch) => {
        moviesAPI.searchMovies(title).then(response => {
            dispatch(setSearchMoviesStateAC(response))
        })
    }
}

export const searchMoviesByIDTC = (id) => {
    return (dispatch) => {
        moviesAPI.searchMoviesByID(id).then(response => {
            dispatch(setSearchMovieFullStateAC(response))
        })
    }
}
export const addFilmToList = (film) => {
    return (dispatch) => {
        dispatch(addFilmToState(film))
        moviesAPI.addFilmToList(film)
    }


}


export default listsReducer;