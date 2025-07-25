import React, { Component } from 'react';

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
            </button>
            <a className="navbar-brand" href="/" >NewS-El</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/business">Business</a></li>
                    <li><a className="dropdown-item" href="/entertainment">Entertainment</a></li>
                    <li><a className="dropdown-item" href="/health">Health</a></li>
                    <li><a className="dropdown-item" href="/science">Science</a></li>
                    <li><a className="dropdown-item" href="/sports">Sports</a></li>
                    <li><a className="dropdown-item" href="/technology">Technology</a></li>
                </ul>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
