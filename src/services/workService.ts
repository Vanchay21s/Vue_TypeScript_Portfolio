import { workAPI } from "../api/work"


export const workService = {
    async find(){
        return await workAPI.find()
    }
}