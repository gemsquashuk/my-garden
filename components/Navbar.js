import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <a className="navbar-brand" href="#">
                            <img src="/logo-mg.png" alt="My Online Garden Logo" width="100" height="100"/>
                        </a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Garden</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Community</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}