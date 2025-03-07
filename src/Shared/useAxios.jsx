import axios from "axios";

export const axioxSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxios = () => {
    return axioxSecure;
};

export default useAxios;