import './Home.css';

export function Home() {
    return (
        <>
            <section>
                <div className="banner"></div>
            </section>

            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 col-md-8">
                            <h2>One Direction</h2>
                            <p>
                            El grupo comenzó en 2010 en "The X Factor" después de que Niall Horan, Zayn Malik, Liam Payne, Harry Styles y Louis Tomlinson se presentaran en las audiciones de este programa. Individualmente, no lograron pasar a la siguiente ronda, pero formaron una banda, que ahora es una de las más exitosas de la historia.
                            </p>
                            <figure>
                                <img className="img-fluid w-100" src='https://firebasestorage.googleapis.com/v0/b/spotifynikol.appspot.com/o/foto%205.jpg?alt=media&token=cceeb79e-56de-46ea-bb0a-c49ae735ff44' alt='' />
                            </figure>
                        </div>
                        <div className="col-12 col-md-4 bg-dark text-white">
                            <h2 className="text-center">Conciertos</h2>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Medellin</p>
                                    <p className="m-0">DEC 4</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Barranquilla</p>
                                    <p className="m-0">APRIL 21</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Cali</p>
                                    <p className="m-0">JUNE 8</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Pasto</p>
                                    <p className="m-0">JULY 29</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Cartagena</p>
                                    <p className="m-0">APRIL 10</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Guajira</p>
                                    <p className="m-0">MAY 22</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">San Andres</p>
                                    <p className="m-0">JANUARY 30</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Santa Marta</p>
                                    <p className="m-0">FEBRUARY 29</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Bucaramanga</p>
                                    <p className="m-0">SEPTEMBER 03</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Pereira</p>
                                    <p className="m-0">DECEMBER 31</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='text-center'>
                                noticias
                            </h1>
                            <hr/>
                        </div>
                    </div>
    
                    <div className="row text-center">
                        <div className="col-12 col-md-4">
                            <img src='https://firebasestorage.googleapis.com/v0/b/spotifynikol.appspot.com/o/Foto.jpg?alt=media&token=1704cee5-25ca-46db-997f-c4fae0d9d92b' alt='ImageLeft' className="img-fluid w-100" />
                            <p>Buen concierto no lo dejes Pasar</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src='https://firebasestorage.googleapis.com/v0/b/spotifynikol.appspot.com/o/1d.jpg?alt=media&token=a9846839-3ef5-4411-933a-891099504962' alt='ImageCenter' className="img-fluid w-100" />
                            <p>Estamos a solo dos horas del sabado </p>
                        </div><div className="col-12 col-md-4">
                            <img src='https://firebasestorage.googleapis.com/v0/b/spotifynikol.appspot.com/o/foto%204.webp?alt=media&token=517927ac-2c74-4728-9962-da9065cb7906' alt='ImageRight' className="img-fluid w-100" />
                            <p>No te lo pierdas Colombia</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}