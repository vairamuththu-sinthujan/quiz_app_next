export const createQuestion = async (question:object,uid:string) => {

    const res = await fetch(`/api/question/create-question`, {
        method: 'POST',
        body: JSON.stringify({...question,uid}),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (!res.ok) {
        throw new Error(`Could not find questions.`,)
    }

    const data = await res.json()
    if (!data.success) {
        throw new Error(data.message)
    }
    return data
}