export async function tokenService(){

    const client_id="client_id=2a8293141c1b4ee39dbe101e33e89385";
    const client_secret="client_secret=9703322445014016ad01a8cea9d236d9";
    const grant_type="grant_type=client_credentials";

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id;

    const URL="https://accounts.spotify.com/api/token"

    const REQUEST = {
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,REQUEST);
    let token=await respuesta.json();
    let tokenDefinitivo=token.token_type+" "+token.access_token;

    return(tokenDefinitivo);
}