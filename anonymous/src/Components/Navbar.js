import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'light':'dark'}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" href="/" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <button className={`btn btn-outline-${props.mode==='light'?"success":"light"} mx-2`} onClick={props.toggleMode}>{props.mode==='light'?"Green":"light"}</button>
            <button className={`btn btn-outline-${props.mode==='light'?"info":"light"} mx-2`} onClick={props.toggleBlue}>{props.mode==='light'?"Blue":"light"}</button>
            </div>
        </div>
    </nav>
  )
}
 
Navbar.propTypes = { title : PropTypes.string.isRequired}
// propTypes can be used to define the type of prop recieved. If something else it recieved it shows warning.

