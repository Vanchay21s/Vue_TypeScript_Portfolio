
export interface Technology{
    id: number,
    name: string,
    by_work :{
        id: number,
        name: string
    },
    created_at: string
}

export interface technologyFormData{
    name: string,
    by_work : number
}