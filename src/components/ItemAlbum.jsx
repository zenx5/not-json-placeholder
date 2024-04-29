import { Link } from "react-router-dom"

export default function ItemAlbum({ id, title }) {
  return (
    <div className="bg-white rounded-lg shadow-lg h-36 border m-2">
      <div className="p-4 flex flex-col justify-between h-full">
        <h2 className="text-xl font-bold">{title}</h2>
        <Link to={`/albums/${id}`} className="block mt-2 text-blue-500">Ver Album</Link>
      </div>
    </div>
  )
}