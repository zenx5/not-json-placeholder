export default class PostService {

    static async getAll() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, { cache: "force-cache" })
        const data = await response.json()
        return data
    }

    static async get(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "force-cache" })
        const data = await response.json()
        return data
    }

    static async getComments(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: "force-cache" })
        const data = await response.json()
        return data
    }
}