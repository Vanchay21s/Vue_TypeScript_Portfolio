import { onMounted, ref } from "vue";
import type { apiResponse } from "../types/apiResponse";
import type { Tool } from "../types/tool";
import { toolService } from "../services/toolService";

export const useTool = () => {
  const isLoading = ref(false);
  const errMessage = ref();
  const tool = ref<apiResponse<Tool[]>>();

  // LoadFrom ------------------------------------------------------------------
  const loadForm = async () => {
    isLoading.value = true;
    try {
      const res = await toolService.find();
      tool.value = res.data;
      return res.data;
    } catch (err: any) {
      errMessage.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };
  onMounted(() => {
    loadForm();
  });
  return { isLoading, errMessage, tool };
};
