import React from "react";
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useData } from "../context/DataProvider";

const AlbumDetails = () => {
  const { albumId } = useParams();
  const { albums } = useData();
  const { photos } = useData()
  

  const selectedAlbum = albums.find((album) => album.id === parseInt(albumId));
 
  return (
    <div>
      <span className="flex flex-row justify-between items-center mt-10 mb-5">
          <h1 className="font-bold text-xl">Fotos del Álbum {selectedAlbum.id}</h1>
          <NavLink to="/albums" className="block text-blue-500 hover:underline">Volver</NavLink>  
      </span>
        
      <div className="px-4 lg:px-0 grid gtid-cols-1 sm:grid-cols-3 gap-4">
            {photos && photos.filter(valor=>valor.albumId==selectedAlbum.id).map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.title} className="w-full h-auto" />
            ))}
        </div>
    </div>
  );
};

export default AlbumDetails;