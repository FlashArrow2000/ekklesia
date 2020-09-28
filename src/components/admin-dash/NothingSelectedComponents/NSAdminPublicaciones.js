import React from "react";
import { Link } from "react-router-dom";
import '../../ui/AdminLeftSideNavbar.css'

export const NSAdminPublicaciones = () => {
  return (
    <div className="all___container ubuntu">
      <section className="page-section" id="services">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent">
              <li className="breadcrumb-item" aria-current="page">
                <Link to="admin/misa" className="text-dark">
                  Inicio
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Publicaciones
              </li>
            </ol>
          </nav>

          <div className="jumbotron bg-dark animate__animated animate__fadeIn">
            <h1 className="display-4 text-primary " style={{fontFamily: "Ubuntu"}}>
              ¡Parece que no has registrado tu templo!
            </h1>
            <hr
              className="my-4 text-white"
              style={{ borderTop: "1px solid white" }}
            ></hr>

            <p className="text-light" style={{fontFamily: "Ubuntu"}}>
              Debés registrar tu templo primero. Para eso, clicá el botón.
            </p>
            <Link
              to="/admin/diseño"
              className="btn btn-primary btn-lg text-dark ubuntu"
              role="button"
            >
              Registrar templo
            </Link>
          </div>
        </div>
      </section>
      {/*<!-- Footer-->*/}
      <footer className="footer py-4 d-flex flex-end fixed-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-left">
              Copyright © Your Website 2020
            </div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="col-lg-4 text-lg-right">
              <a className="mr-3" href="#!">
                Privacy Policy
              </a>
              <a href="#!">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
