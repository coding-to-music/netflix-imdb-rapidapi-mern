import {moviesAPI} from "../api/moviesAPI";

const CHANGE_LIST = 'CHANGE_LIST';
const SET_FILMS_STATE = 'SET_FILMS_STATE';

let initialState = {
    movies: [
        {
            id: 1,
            list: 'Current',
            cover: 'https://www.kinonews.ru/insimgs/poster/poster9396_1.jpg',
            title: 'Inception',
            rating: '8.5',
            releaseDate: '8 July 2010',
            genre: ['Action', 'Adventure', 'Sci-Fi'],
            shortDescription: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the\n' +
                '                        inverse task of planting an idea into the mind of a C.E.O.',
            fullDescription: ' Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing\n' +
                '                        valuable secrets from deep within the subconscious during the dream state, when the mind is at\n' +
                '                        its most vulnerable. Cobbs rare ability has made him a coveted player in this treacherous new\n' +
                '                        world of corporate espionage, but it has also made him an international fugitive and cost him\n' +
                '                        everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job\n' +
                '                        could give him his life back but only if he can accomplish the impossible, inception. Instead of\n' +
                '                        the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is\n' +
                '                        not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no\n' +
                '                        amount of careful planning or expertise can prepare the team for the dangerous enemy that seems\n' +
                '                        to predict their every move. An enemy that only Cobb could have seen coming.—Warner Bros.\n' +
                '                        Pictures'
        },
        {
            id: 2,
            list: 'Planning',
            cover: 'https://www.themoviedb.org/t/p/original/5qhJeFztZ2N31T7TvG7j6M1sOtj.jpg',
            title: 'Interstellar',
            rating: '8.6',
            releaseDate: '26 October 2014',
            genre: ['Adventure', 'Drama', 'Sci-Fi'],
            shortDescription: 'Earth\'s future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankinds survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.',
            fullDescription: ' In 2067, crop blights and dust storms threaten humanity\'s survival. Cooper, a widowed engineer and former NASA pilot turned farmer, lives with his father-in-law, Donald, his 15-year-old son, Tom Cooper, and 10-year-old daughter, Murphy "Murph" Cooper. After a dust storm, strange dust patterns inexplicably appear in Murphy\'s bedroom; she attributes the anomaly to a ghost. Cooper eventually deduces the patterns were caused by gravity variations and they represent geographic coordinates in binary code. Cooper follows the coordinates to a secret NASA facility headed by Professor John Brand.\n' +
                '\n' +
                '48 years earlier, unknown beings positioned a wormhole near Saturn, opening a path to a distant galaxy with 12 potentially habitable worlds located near a black hole named Gargantua. Twelve volunteers traveled through the wormhole to individually survey the planets and three — Dr. Mann, Laura Miller, and Wolf Edmunds — reported positive results. Based on their data, Professor Brand conceived two plans to ensure humanity\'s survival. Plan A involves developing a gravitational propulsion theory to propel settlements into space, while Plan B involves launching the Endurance spacecraft carrying 5,000 frozen human embryos to settle a habitable planet.'
        },
    ]
}


const listsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_LIST: {
            let stateCopy = {
                ...state,
                movies: [...state.movies]
            }
            for (let i = 0; i < state.movies.length; i++) {
                let stateId = state.movies[i].id;
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
        default:
            return state;
    }
}


export const changeListAC = (button, id) => ({type: CHANGE_LIST, button: button, id: id});
export const setMoviesStateAC = (movies) => ({type: SET_FILMS_STATE, movies: movies});


export const changeListTC = (id, button) => {
    return (dispatch) => {
        moviesAPI.changeList(id, button)
            .then(() => {
                dispatch(changeListAC(button, id))
            })
    }
}

export const getMoviesTC = () => {
    return (dispatch) => {
        moviesAPI.getMovies().then(response => {
            dispatch(setMoviesStateAC(response.movies))
        })
    }
}


export default listsReducer;