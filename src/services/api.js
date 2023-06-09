import Axios from 'axios'

// export const BASE_URL = 'http://localhost:3000'
export const BASE_URL = 'https://todobackend-production-44b4.up.railway.app'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
        }
        return config 
    },
    (error) => Promise.reject(error)
)

export default Client