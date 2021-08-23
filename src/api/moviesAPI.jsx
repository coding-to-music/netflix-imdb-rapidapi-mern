import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/',
})

export const moviesAPI = {
    getMovies() {
        return instance.get('movies/')
            .then(response => {
                return response.data
            })
            .catch(error => console.error(error))
    },
    changeList(id, button) {
        instance.patch('movies/',{id: id,button: button})
            .catch(error => console.error(error))
    },
    searchMovies(title){
         return instance.get(`search/?title=${title}`)
             .then(response =>{
                 return response.data.result.Search
             })
            .catch(error => console.log(error))
    },
    searchMoviesByID(id){
        return instance.get(`search/full?id=${id}`)
            .then(response =>{
                return response.data.result
            })
            .catch(error => console.log(error))
    }
}

