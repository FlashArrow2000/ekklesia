import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./assets/img/ekklesiaconfondo.svg";
import '../../styles/styles.css';

export const MainDashboardNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">
          <img src={logo} alt="ekklesia" />
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ml-1"></i>
          </button>
        </Link>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger" style={{fontFamily: "Ubuntu"}} exact to="/info">
                Registrar Iglesias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                style={{fontFamily: "Ubuntu"}}
                exact
                to="/auth/admin"
              >
                Administración
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                style={{fontFamily: "Ubuntu"}}
                exact
                to="/auth/client"
              >
                Iniciar Sesión
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
