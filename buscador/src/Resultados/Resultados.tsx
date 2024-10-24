import '../Resultados/styles.css';

const Resultados = () => {
  return (
    <div>
        <div className="search-container">
            <div className="search-bar">
                <input type="text" placeholder="Buscar en la Web ..."/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <span className="searchSpan">Search</span>
                </button>
            </div>
        </div>
        <div className="results">
            <div className="result">
                <a href="/resultados/cargando">
                <h2>Resultado de búsqueda 1</h2>
                </a>
                <div className="url">www.ejemplo1.com</div>
                <div className="description">Descripcion breve del resultado</div>
            </div>
            <div className="result">
                <a href="/resultados/cargando">
                <h2>Resultado de búsqueda 2</h2>
                </a>
                <div className="url">www.ejemplo2.com</div>
                <div className="description">Descripcion breve del resultado</div>
            </div>
            <div className="result">
                <a href="/resultados/cargando">
                <h2>Resultado de búsqueda 3</h2>
                </a>
                <div className="url">www.ejemplo3.com</div>
                <div className="description">Descripcion breve del resultado</div>
            </div>
            <div className="result">
                <a href="/resultados/cargando">
                <h2>Resultado de búsqueda 4</h2>
                </a>
                <div className="url">www.ejemplo4.com</div>
                <div className="description">Descripción breve del resultado</div>
            </div>
        </div>
    </div>
  )
}

export default Resultados