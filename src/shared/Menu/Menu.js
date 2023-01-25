import { Link } from "react-router-dom";

export function Menu() {
    return (
        <nav className="navbar navbar-expand-lg menu navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">One Direction</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/history">Historia</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/members">Integrantes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/music">Music</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/albums">Albumes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Productos</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    )
}