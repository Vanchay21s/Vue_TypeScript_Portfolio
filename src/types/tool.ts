
export interface Tool {
    id: number,
    name: string,
    by_technology: {
        id: number,
        name: string
    },
    created_at: string
}

export interface ToolFromData{
    name: string,
    by_technology: number
}