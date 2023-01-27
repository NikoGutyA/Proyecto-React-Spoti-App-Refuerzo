import { useState, useEffect } from "react"

// Services
import { topTracksService } from "../../services/topTracksService"

export function Music() { 
    //Estamos usando el usestate para almacenar  la repuesta
    // del api de  forma global
    const[songs, setSongs] = useState(null)
    const[stateLoad, setStateLoad] = useState(true)

    //Usando el useEffect para evitar el consumo
    //del api una sola vez
    useEffect(function(){
        topTracksService().then(function(response){
            setSongs(response)
            setStateLoad(false)
        })    
    },[])

    //render del componente
    if (stateLoad === true){
        return(
            <>
                <h2 className="text-center py-3">Estamos Cargando la Canciones</h2>
            </>
        )
    }else{
        return(
            <>
                <h2 className="text-center py-3">Canciones de la banda</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {
                            songs.tracks.map(function(song, index){
                                return(
                                    <div key={index}>
                                        <div className="col">
                                            <div className="card h-100 shadow">
                                                <img src={song.album.images[0].url} className="h-100 img-fluid w-100" alt="imageMusic"></img>
                                                <div className="p-2 text-center">
                                                    <h3>{song.name}</h3>
                                                    <h5>Popularidad {song.popularity}</h5>
                                                    <audio controls src={song.preview_url}></audio>
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