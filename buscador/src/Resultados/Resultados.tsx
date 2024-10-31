import { useEffect, useState } from 'react';
import '../Resultados/styles.css';
import api from '../http.common';
import Nav from '../Nav/Nav';
import { useLocation, useNavigate } from 'react-router-dom';

type searchResult = {
  result_id: number;
  search_id: number;
  title: string;
  description: string;
  url: string;
};

const Resultados = () => {
    const [resultados, setResultados] = useState<searchResult[] | null>(null);
    const [searchText, setSearchText] = useState('');

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const resultText = queryParams.get('query');

    const handleInputChange = (event : any) => {
        setSearchText(event.target.value);
    };

    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate(`/resultados?query=${encodeURIComponent(searchText)}`);
    };
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await api.get('/postresultados');
            setResultados(response.data);
          } catch (error) {
            console.error('Error consiguiendo los datos', error);
          }
        };
        fetchData();
      }, []);

  return (
    <div>
      <Nav />
        <div className="search-container">
            <div className="search-bar">
                <input
                  type="text"
                  placeholder="Buscar en la Web ... "
                  id="searchBar"
                  value={searchText}
                  onChange={handleInputChange}
                />
                <button onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <span className="searchSpan">Search</span>
                </button>
            </div>
        </div>
        <div className="results">
          {resultados && resultados.map((resultado, index) => (
            <div className="result" key={index}>
                <a href={resultado.url}>
                <h2>{resultado.title}</h2>
                </a>
                <div className="url">{`${resultado.url} > ${resultText}`}</div>
                <div className="description">{resultado.description}</div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Resultados