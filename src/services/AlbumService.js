export default class AlbumService {
    static async getAll() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums`, { cache: "force-cache" })
        const data = await response.json()
        return data
    }

    static async get(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { cache: "force-cache" })
        const data = await response.json()
        return data
    }
}