import axios from 'axios'

export const getJobs = async () => {
    try {
        const response = await axios.get('https://demo5847386.mockable.io/jobs')
        return response.data
    }
    catch (error) {
        console.log(error);
    }
}

export const postForm = async (data) => {
    try {
        const response = await axios.post('https://httpbin.org/anything', data)
        return response.data
    }
    catch (err) {
        return 'err'
    }
}