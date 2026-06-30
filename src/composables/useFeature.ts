import { ref } from "vue"
import type { apiResponse } from "../types/apiResponse"
import type { Feature } from "../types/feature"
import * as featureService from "../services/featureService"

export const useFeature = () => {
    const isLoading = ref(false)
    const errMessage = ref("")
    const featureTodo = ref<apiResponse<Feature[]>>()

    // get Feature
    const loadForm = async () => {
        isLoading.value = true
        try {
            const res = await featureService.getFeature();
            featureTodo.value = res.data
            return res.data
        } catch (err: any) {
            
        } finally {
            isLoading.value = false
        }
    }
    return {
        isLoading,
        errMessage,
        featureTodo,
        loadForm
    }
}