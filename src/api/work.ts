import { apiURL } from "./apiURL"

export const workAPI = {
    async find(){
        return await apiURL.get(`/work`)
    }
}