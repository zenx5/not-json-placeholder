export default class PhotoService {
    static async getAll() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos`, { cache: "force-cache" });
        const data = await response.json();
        return data;
    }

    static async getByAlbumId(albumId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, { cache: "force-cache" });
        const data = await response.json();
        return data;
    }
}