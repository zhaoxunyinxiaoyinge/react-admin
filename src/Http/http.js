import axios from "axios"
axios.interceptors.request.use(function (config){
    // let token=window.localStorage.getItem("token")||"";
    // config.headers.authorization="Bearer "+token
    return config;
}, function (error){
    console.log(error)
});
axios.interceptors.response.use(function(response) {
    return response;
}, function (error) {
    console.log(error)
});
export default axios;