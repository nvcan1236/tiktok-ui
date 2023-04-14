import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const get = async (api, option = {}) => {
    const searchData = await request.get(api, option)
    return searchData.data
}

export default request;