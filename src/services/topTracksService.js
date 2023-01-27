import { tokenService } from "./tokenService";

// Receta para consumir un api con react
export async function topTracksService(){

    let token = await tokenService()

    // 1. PA DONDE VAS Y A QUE VAS 
    // ESCRIBIR LA URL DEL SERVICIO DEL API
    const URL = "https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq/top-tracks?market=US";

    // 2.QUE OPERACION VAS A HACER EN LA BASE DE DATOS 
    // CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR }
    const REQUEST = {
        method:"GET",
        // headers:{Authorization:token}
        headers:{
            Authorization: token
        }
    }

    // 3. NOS VAMOS AL RESTAURANTE 
    // CONSUMIMOS EL API
    let response = await fetch(URL, REQUEST);
    let topTracks = await response.json();

    return topTracks;
}