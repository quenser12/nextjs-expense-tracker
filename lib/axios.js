import Axios from "axios";

const axios  = Axios.create({
    baseURL: process.eventNames.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    },
    withCredentials:true
})

export default axios;