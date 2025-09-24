import axios from "axios"

const back_end_url = import.meta.env.VITE_BACK_END_URL

export const addDownloadApplication = async (formData: any) => {
    try {
        let res = await axios.post(`${back_end_url}/eBook/addDownloadApplication`, formData)
        return res
    } catch (error) {
        throw error
    }
}