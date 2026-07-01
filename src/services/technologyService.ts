import { technologyAPI } from "../api/technology.api"


export const technologyService = {
    async find(){
        return await technologyAPI.find()
    }
}