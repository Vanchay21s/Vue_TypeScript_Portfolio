import { apiURL } from "./apiURL";

export const educationAPI = {
  addEducation(data: FormData) {
    return apiURL.post('/education', data);
  },

  getEducation() {
    return apiURL.get(`/education`);
  },

  getEducationById(id: number) {
    return apiURL.get(`/education/${id}`);
  },

  updateEducation(id: number, data: FormData) {
    return apiURL.patch(`/education/${id}`, data);
  },

  deleteEducation(id: number) {
    return apiURL.delete(`/education/${id}`);
  },
};