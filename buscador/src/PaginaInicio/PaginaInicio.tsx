import { useNavigate } from 'react-router-dom';
import '../PaginaInicio/styles.css';
import logo from './logobuscador.jpg';

const PaginaInicio = () => {

    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate('/resultados');
    };
  return (
    <div>
        <body>
            <img className="logo" src={logo} alt="logo"/>
            <section>
                <form id="searchForm" action=" " method="GET">
                    <input type="text" name="q" placeholder="Buscar en la Web ... " id="searchBar"/>
                    <button onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        <span className="searchSpan">Search</span>
                    </button>
                </form>
            </section>

            <footer>
                <a href="#">Términos de uso</a> | <a href="#">Política de privacidad</a>
            </footer>
        </body>
    </div>
  )
}

export default PaginaInicio