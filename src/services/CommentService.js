export default class CommentService {
    static async getAll() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments`, { cache: "force-cache" })
        const data = await response.json()
        return data
    }
}