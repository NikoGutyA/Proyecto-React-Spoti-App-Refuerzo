import './Footer.css'

export function Footer() {
    return(
        <footer className="footer mt-5">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-4 text-center">
                            <img className="imagenGori" src="https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/logo-One-Direction.png?alt=media&token=238c973b-ff56-483a-a95f-feee8cec5a65" alt="ImagenLogo" classNameName="img-fluid w-750"/>
                        </div>
                          <div className="col-12 col-md-4 text-center">
                            <h2 className="fw-bold">sobre la banda</h2>
                            <h4>banda de buena musica</h4>
                        </div>

                        <div className="col-12 col-md-4">
                            <i className="bi bi-instagram fuente me-5"></i>
                            <i className="bi bi-facebook fuente me-5"></i>
                            <i className="bi bi-twitter fuente me-5"></i>
                            <i className="bi bi-vimeo fuente"></i>    
                        </div> 
                    </div>
                </div>
            </footer>
    )
}