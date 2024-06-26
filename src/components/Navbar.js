
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark text-light">
        <div className="container-fluid">
          <a className="navbar-brand text-light" to="/">NewsCastle</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/entertaiment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )

}
