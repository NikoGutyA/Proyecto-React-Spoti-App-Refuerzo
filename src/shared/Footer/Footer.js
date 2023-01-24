import './Footer.css'

export function Footer() {
    return(
        <footer className="footer mt-5">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-4 text-center">
                            <img className="imagenGori" src="https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/unnamed-1.png?alt=media&token=a7cd828f-e71f-467a-b02a-3cb410334ba7" alt="ImagenLogo" classNameName="img-fluid w-750"/>
                        </div>
                          <div className="col-12 col-md-4 text-center">
                            <h2 className="fw-bold">sobre la banda</h2>
                            <h4>banda de buena musica</h4>
                        </div>

                        <div className="col-12 col-md-4">
                            <i className="bi bi-instagram fuente me-5"></i>
                            <i className="bi bi-instagram fuente me-5"></i>
                            <i className="bi bi-instagram fuente me-5"></i>
                            <i className="bi bi-vimeo fuente"></i>    
                        </div> 
                    </div>
                </div>
            </footer>
    )
}