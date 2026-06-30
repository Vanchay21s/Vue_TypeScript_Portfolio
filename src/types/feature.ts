
export interface Feature{
    id: number,
    name: string,
    description: string,
    by_work: {
        id: number,
        name: string
    },
    created_at: string 
}