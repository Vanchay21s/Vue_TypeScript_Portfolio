import { toolAPI } from "../api/tool.api"


export const toolService = {
    async find(){
        const res = await toolAPI.getTool()
        return res;
    }
}