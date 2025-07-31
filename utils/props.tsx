export interface QuestionCardProps  {
    id: number
    title: string
    description: string
    difficulty: string
    tags: string[]
    timeEstimate: string
    status: string
    score?: number | null
    attempts?: number
}


export interface AuthButtonProps {
    initialUser: {
        uid: string;
        photoURL?: string | null;
        name?: string | null;
    } | null;
}
