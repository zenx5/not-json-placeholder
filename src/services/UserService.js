export default class UserService {
    static async getAll() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, { cache: "force-cache" })
        const data = await response.json()
        return data
    }

    static async get(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: "force-cache" })
        const data = await response.json()
        return data
    }
}