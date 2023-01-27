import { tokenService } from "./tokenService";

//Receta para consumir un api con react
export async function albumsService() {

    let token = await tokenService()

    //1.PA DONDE VAS Y A QUE VAS 
    //ESCRIBIR LA URL DEL SERVICIO DEL API 
    const URL="https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq/albums?market=US&limit=9"

    //2.QUE OPERACION VAS A HACER EN LA BASE DE DATOS 
    //CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR }
    const REQUEST = {
        method:"GET",
        headers:{
            // Authorization:token
            Authorization: token
        }
    }

    //3.NOS VAMOS AL RESTAURANTE 
    //CONSUMIMOS EL API
    let response = await fetch(URL, REQUEST);
    let albums = await response.json();
    
    console.log(albums);

    return albums
}