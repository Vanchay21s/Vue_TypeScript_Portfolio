import { skillAPI } from "../api/skill.api";

export const getSkill = async () => {
  return await skillAPI.getSkill();
};


