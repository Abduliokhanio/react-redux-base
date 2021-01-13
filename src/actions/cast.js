export const getCast = () => {
    fetch("https://www.officeapi.dev/api/characters/")
        .then(res => res.json())
        .then(data => {
            return data.data
        })
}