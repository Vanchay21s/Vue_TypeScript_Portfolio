import type { Education } from "../types/education";

export interface apiResponse<> {
    message: string,
    status: boolean,
    data: Education[]
}