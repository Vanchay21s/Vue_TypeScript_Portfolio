import { apiURL } from "./apiURL"


export const featureAPI = {
    async getFeature(){
        return await apiURL.get(`/feature`)
    }
}