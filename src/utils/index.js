import axios from "axios"

let instance=axios.create({
    baseURL:"",
    timeout:500
})

instance.interceptors.request.use((config)=>{
    return config
})

instance.interceptors.response.use((response)=>{
    return response
},error=>{
})

export default instance;