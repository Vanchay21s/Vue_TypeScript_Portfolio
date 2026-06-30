import { apiURL } from "./apiURL";

export const skillAPI = {
  addSkill(data: FormData) {
    return apiURL.post("/skill", data);
  },
  getSkill() {
    return apiURL.get("/skill");
  },
  getSkillByID(id: number) {
    return apiURL.get(`/skill${id}`);
  },
  updateSkill(id: number, data: FormData) {
    return apiURL.patch(`/skill/${id}`, data);
  },
  deleteSkill(id: number) {
    return apiURL.delete(`/skill${id}`);
  },
};
