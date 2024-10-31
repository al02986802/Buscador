import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  return (
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
  )
}

export default Nav;