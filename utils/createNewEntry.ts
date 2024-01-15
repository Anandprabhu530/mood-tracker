const fullpath = (path: string) => {
    return window.location.origin + path
}

export const createNewEntry = async () => {
    const res = await fetch(fullpath(`/api/moods`), {
        method: "POST"
    })
    if (res.ok) {
        const response = await res.json()
        return response.data
    }
}