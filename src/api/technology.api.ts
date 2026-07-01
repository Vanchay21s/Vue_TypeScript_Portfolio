import { apiURL } from "./apiURL"


export const technologyAPI = {
    async find() {
        return await apiURL.get(`/technology`)
    }
}