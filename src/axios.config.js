import Axios from "axios"
const axios = (baseURL) => {
const instance = Axios.create({
baseURL: 'http://127.0.0.1:8082',//back-end
headers: { 'Content-Type': 'application/json' },
timeout: 5000,
});
return instance;
}
export {axios};
export default axios();