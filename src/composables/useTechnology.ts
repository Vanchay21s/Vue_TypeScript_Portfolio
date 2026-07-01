import { onMounted, ref } from "vue"
import type { apiResponse } from "../types/apiResponse"
import type { Technology } from "../types/technology"
import { technologyService } from "../services/technologyService"

export const useTechnology = () => {
    const isLoading = ref(false)
    const errMessage = ref()
    const technology = ref<apiResponse<Technology[]>>()

    // loadForm --------------------------------------------------------
    const loadForm = async () => {
        const res = await technologyService.find()
        technology.value = res.data
        return res.data
    }
    onMounted(()=> {
        loadForm()
    })
    // addTechnology --------------------------------------------------------
    return {isLoading, errMessage, technology}
}