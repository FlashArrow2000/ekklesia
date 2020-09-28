import React from "react";
import {
  fade,
  makeStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

  
  const useStylesReddit = makeStyles((theme) => ({
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
    focused: {},
  }));
  
  function RedditTextField(props) {
    const classes = useStylesReddit();
  
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));
  


export const ClientAuthLogin = () => {
  const classes = useStyles();

  return (
    <>
      <section className="page-section mt-5" id="services">
        <div className="container">
          <div className="jumbotron bg-dark animate__animated animate__fadeIn">
            <h1 className="display-4 text-primary text-center">
              ¡El Señor te espera!
            </h1>
            <p
              className="lead text-white text-center"
              style={{ fontFamily: "Ubuntu" }}
            >
              Iniciá sesión y podrás reservar espacios en tu iglesia favorita.
            </p>
            <hr
              className="my-4 text-white"
              style={{ borderTop: "1px solid white" }}
            ></hr>
             <form className={`${classes.root} form-group`} noValidate autoComplete="off">
              <div className="container w-50">
                <div className="row d-flex justify-content-center">
                  <div className="col-6">
                    <div>
                      <RedditTextField
                        label="Correo electrónico"
                        type="email"
                        className={`${classes.margin}`}
                        variant="filled"
                        id="reddit-input-email"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div>
                      <RedditTextField
                        label="Contraseña"
                        type="password"
                        className={`${classes.margin}`}
                        variant="filled"
                        id="reddit-input-pass"
                      />
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-11 mt-3">
                    <button type="button" className="btn btn-primary form-control text-dark" style={{ fontFamily: "Ubuntu" }}>
                      Iniciar Sesión
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <hr
              className="my-4 text-white"
              style={{ borderTop: "1px solid white" }}
            ></hr>
            <p
              className="lead text-white text-center"
              style={{ fontFamily: "Ubuntu" }}
            >
              ¿No tenés cuenta? Regisate <Link to="/auth/client/register" className="text-primary hoverLink" style={{}}>aquí</Link>.
            </p>
          </div>
        </div>
      </section>
      {/*<!-- Footer-->*/}
      <footer className="footer py-4 d-flex flex-end fixed-bottom bg-light">
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
    </>
  );
};
