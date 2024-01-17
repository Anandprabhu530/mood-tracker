
const fullpath = (path: string) => {
    return window.location.origin + path
}

export const updateEntry = async (id, content) => {
    const res = await fetch(
        new Request(fullpath(`/api/moods/${id}`), {
            method: "PATCH",
            body: JSON.stringify({ content })
        })
    )

    if (res.ok) {
        const response = await res.json()
        return response.data
    }
}
export const createNewEntry = async () => {
    const res = await fetch(
        new Request(fullpath(`/api/moods`), {
            method: "POST"
        })
    )

    if (res.ok) {
        const response = await res.json()
        return response.data
    }
}