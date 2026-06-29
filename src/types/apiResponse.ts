

export interface apiResponse<T> {
    message: string,
    status: boolean,
    data: T
}