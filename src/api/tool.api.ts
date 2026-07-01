import { apiURL } from "./apiURL"


export const toolAPI = {
    async getTool(){
        return apiURL.get(`/tool`)
    }
}