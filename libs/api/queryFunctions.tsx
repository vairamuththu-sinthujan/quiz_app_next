export const getQuestions = async (id: {id:string}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/question/get-questions/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-cache",
    })

    if (!res.ok) {
        throw new Error(`Could not find questions.`)
    }
    return res.json()
}


export const getQuestion = async (uid:string,qid:string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/question/${uid}/${qid}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    })

    if (!res.ok) {
        throw new Error(`Something went wrong.`)
    }

    const data : Promise<any> = await res.json()

    return data
}