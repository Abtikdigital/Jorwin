import axios from "axios";
const back_end_url = import.meta.env.VITE_BACK_END_URL

export const addContact = async (formData:any) => {
    try {
        console.log(back_end_url,"this si backedn url")
        let res = await axios.post(`${back_end_url}/contact/addContact`, formData)
        console.log(res)
        return res
    } catch (error) {
        throw error
    }
}



