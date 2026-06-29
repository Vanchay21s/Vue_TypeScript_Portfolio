import { ref } from "vue";
import * as educationService from "../services/educationService";
import type { apiResponse } from "../types/apiResponse";
import type { Education } from "../types/education";

export const useEducation = () => {
  const isLoading = ref(false);
  const errMessage = ref();
  const educationTodo = ref<apiResponse<Education[]>>();
  const addEducation = async (data: Education) => {
    isLoading.value = true;
    try {
      const res = await educationService.addEducation(data);
      return res;
    } catch (err: any) {
      errMessage.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };
  const loadEducation = async () => {
    isLoading.value = true;
    try {
      const res = await educationService.getEducation();
      educationTodo.value = res.data;
      return res;
    } catch (err: any) {
      errMessage.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    errMessage,
    educationTodo,
    addEducation,
    loadEducation,
  };
};
