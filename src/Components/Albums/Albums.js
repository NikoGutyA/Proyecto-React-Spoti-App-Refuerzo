import { useEffect, useState } from 'react';

/* Services */
import { albumsService } from '../../services/albumsService';

export function Albums() {
    //Estamos usando el usestate para almacenar  la repuesta
    // del api de  forma global
    const[albums, setAlbums]=useState(null)
    const[estadocarga,setEstadoCarga]=useState(true)

    //Usando el useEffect para evitar el consumo
    //del api una sola vez
    useEffect(function(){
        albumsService().then(function(response){
            setAlbums(response)
            setEstadoCarga(false)
        })
    },[])

    //render del componente
    if (estadocarga === true){
        return(
            <>
                <h2 className="text-center py-3">Estamos Cargando los Albums</h2>
            </>
        )
    }else{
        return(
            <>
                <h2 className="text-center py-3">Albums de la banda</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {
                            albums.items.map(function(album, index){
                                return(
                                    <div key={index}>
                                        <div className="col">
                                            <div className="card h-100 shadow">
                                                <img src={album.images[0].url} className="h-100 img-fluid w-100" alt="imageAlbum"></img>
                                                <div className="p-2 text-center">
                                                    <h3>{album.name}</h3>
                                                    <p> <strong>Artista:</strong> {album.artists[0].name}</p>
                                                    <p> <strong>Canciones Del Album:</strong> {album.total_tracks}</p>
                                                    <p> <strong>Fecha De Lanzamiento:</strong> {album.release_date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>    
            </>
        )
    }
}