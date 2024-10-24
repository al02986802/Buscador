import '../Cargando/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cargando = () => {
  return (
    <div className='container-fluid bodyContainer'>
        <nav className="navbar navbar-expand-lg navBar">
            <div className="container-fluid">
                <a className="navbar-brand navBarTitle" href="/">Buscador</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active navBarLink" aria-current="page" href="/">Inicio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid search-container">
            <div className="search-bar">
                <input type="text" placeholder="Buscar en la Web ..."/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <span className="searchSpan">Search</span>
                </button>
            </div>
            <div className="results">
                <div className="loadingContainer">
                <div className="spinner-border spinnerBorder" role="status">
                </div>
            </div>
            <div className="loadingContainer">
                <span className="sr-only">Cargando...</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cargando