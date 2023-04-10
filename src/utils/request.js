import axios from "axios";

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

})

export const get = async (api, option = {}) => {
    const searchData = await request.get(api, option)
    return searchData.data
}

export default request;