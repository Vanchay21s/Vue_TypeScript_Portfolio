import { onMounted, ref } from "vue"
import type { apiResponse } from "../types/apiResponse"
import type { Skill } from "../types/skill"
import * as skillService from "../services/skillService"


export const useSkill = () => {
    const isLoading = ref<boolean>(false)
    const errMessage = ref<any>()
    const skillTodo = ref<apiResponse<Skill[]>>()

    // loadForm ------------------------------------------------
    const loadForm = async () => {
        isLoading.value = true
        try {
            const res = await skillService.getSkill()
            skillTodo.value = res.data
            console.log("test - useSkill.ts:18",skillTodo)
            return res.data
        } catch (err: any) {
            errMessage.value = err.message
        } finally {
            isLoading.value = false
        }
    }
    onMounted(() => {
        loadForm()
    })
    return {isLoading, errMessage, skillTodo, loadForm}
}