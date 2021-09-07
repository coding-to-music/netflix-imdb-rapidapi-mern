import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/',
})

export const handleLogin = async googleData => {
    return await axios.post("/api/v1/auth/google", {
        token: googleData.tokenId,
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response
    })
        .catch(error => console.log(error))
}

export const Auth = {
    authMe() {
        return instance.get('user/')
            .then(response => {
                return response
            })
            .catch(error => {
                console.error(error)
            })
    },
    logout() {
         instance.delete("logout/")
            .catch(error => {
                console.error(error)
            })
    }
}

