import { onMounted, ref } from "vue"
import { workService } from "../services/workService"
import type { Work } from "../types/work"
import type { apiResponse, ResponsePagination } from "../types/apiResponse"


export const useWork = () => {
    const isLoading = ref(false)
        const errMessage = ref()
        const work = ref<apiResponse<ResponsePagination<Work[]>>>()
        
        // LoadFrom ------------------------------------------------------------------
        const loadForm = async () => {
            isLoading.value = true
            try {
                const res = await workService.find()
                work.value = res.data
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
        return {isLoading, errMessage, work}
}