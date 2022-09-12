export type Usuario = {
    id: number,
    name: string,
    nickname: string,
    email: string
}

export type Tarefa = {
    id: number,
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: number
}