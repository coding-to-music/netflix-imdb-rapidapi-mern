import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/',
})

export const moviesAPI = {
    getMovies() {
        return instance.get('movies/')
            .then(response => {
                console.log(response.data)
                return response.data
            })
            .catch((error) => {
                console.error(error);
            })
    },
    changeList(id, button) {
       return instance.put('movies/',{id: id,button: button})
    }
}

