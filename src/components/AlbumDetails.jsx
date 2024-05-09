import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useData } from "../context/DataProvider";

export default function AlbumDetails(){
  const { albumId } = useParams();
  const { photos } = useData()

  return (
    <div>
      <span className="flex flex-row justify-between items-center mt-10 mb-5">
          <h1 className="font-bold text-xl">Fotos del Álbum {albumId}</h1>
          <NavLink to="/albums" className="block text-blue-500 hover:underline">Volver</NavLink>
      </span>
      <div className="px-4 lg:px-0 grid gtid-cols-1 sm:grid-cols-3 gap-4">
            {photos && photos.filter(photo => photo.albumId==albumId).map((photo) => (<div key={photo.id} className="relative">
              <img src={photo.url} alt={photo.title} className="w-full h-[288px] border border-slate-200" />
              <span className="flex flex-col justify-end absolute bottom-0 px-2 py-1 h-[80px] w-full bg-slate-800 bg-opacity-50 text-white ">{photo.title}</span>
            </div>
            ))}
        </div>
    </div>
  )
}