import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { startRegisterWithEmailPasswordName } from "../../../actions/auth";
import { addAdminToState, startAddAdmin } from "../../../actions/admin";
import validator from 'validator';
import { removeError, setError } from "../../../actions/validations";

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export const AdminAuthRegister = () => {
  const classes = useStyles();

  // const handlePictureClick = ( ) => {
  //   document.querySelector('#fileSelector').click();
  // }

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];

  //   console.log(file);

  //   // if ( file ){
  //   //     dispatch( startUploading( file ) );
  //   // }
  // }

  const dispatch = useDispatch();

  const { msgError } = useSelector( state => state.validations );
  
  const [ formValues, handleInputChange ] = useForm({
    PrimerNombre: 'Daniel',
    SegundoNombre: '',
    PrimerApellido: 'Campos',
    SegundoApellido: 'Sánchez',
    Cedula: '117980889',
    NumeroTelefonico: '87266504',
    CorreoElectronico: 'daniel2000@hotmail.com',
    Password: '123456789',
    IglesiaAdministra: 'Iglesia San Juan de Dios',
    Puesto: 'Sacristan'
  })

  const { PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, Cedula, NumeroTelefonico, CorreoElectronico, Password, IglesiaAdministra, Puesto } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if( isFormValid() ){
      dispatch( startRegisterWithEmailPasswordName( CorreoElectronico, Password, PrimerNombre ) )
      dispatch(addAdminToState(PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, Cedula, NumeroTelefonico, CorreoElectronico, Password, IglesiaAdministra, Puesto));
      setTimeout(() => {
        dispatch( startAddAdmin() )
      }, 1000);
      
    }

  }

  const isFormValid = () => {

    if( PrimerNombre.trim().length === 0 ){
      dispatch( setError( 'El campo Primer Nombre es requerido' ) )
      return false
    } else if ( PrimerApellido.trim().length <= 2  ) {
      dispatch( setError( 'El campo Primer Apellido debe tener mínimo 3 letras' ) )
      return false
    } else if ( SegundoApellido.trim().length <= 2  ) {
      dispatch( setError( 'El campo Segundo Apellido debe tener mínimo 3 letras' ) )
      return false
    } else if ( Cedula.trim().length < 9 ) {
      dispatch( setError( 'El formato para la cédula es sin guiones ni espacios. Recuerda que debe tener 9 caracteres' ) )
      return false
    } else if ( NumeroTelefonico.trim().length < 8 ) {
      dispatch( setError( 'El formato para el número telefonico es sin guiones ni espacios. Recuerda que debe tener 8 caracteres' ) )
      return false
    } else if ( !validator.isEmail( CorreoElectronico ) ) {
      dispatch( setError( 'El correo electrónico no es válido' ) )
      return false
    } else if ( Password.length < 8 ) {
      dispatch( setError( 'La contraseña debe de tener mínimo 8 caracteres' ) )
      return false
    } else if ( IglesiaAdministra.trim().length < 8 ) {
      dispatch( setError( 'El campo Iglesia que Administra debe tener mínimo 8 caracteres' ) )
      return false
    } else if ( Puesto.trim().length < 6 ) {
      dispatch( setError( 'El campo Puesto debe tener mínimo 6 caracteres' ) )
      return false
    }
    
    dispatch( removeError() );

    return true;

  }

  return (
    <>
      <section className="page-section mt-5" id="services">
        <div className="container">
          <div className="jumbotron bg-dark animate__animated animate__fadeIn">
            <h1 className="display-4 text-primary text-center">
              Registro para administradores
            </h1>
            <p
              className="lead text-white text-center"
              style={{ fontFamily: "Ubuntu" }}
            >
              Administrador, completá lo que se te solicita.
            </p>
            <hr
              className="my-4 text-white"
              style={{ borderTop: "1px solid white" }}
            ></hr>

            {
              (msgError) &&
               (
                  <div className="alert alert-danger" role="alert" style={{ fontFamily: "Ubuntu" }}>
                     { msgError }
                  </div>
              )
            }

            

            <form
              className={`${classes.root} form-group`}
              noValidate
              autoComplete="off"
              onSubmit={ handleRegister }
            >
              <div className="container w-50">
                <div className="row d-flex justify-content-center">
                  <div className="col-6">
                    <div>
                      <RedditTextField
                        label="Primer nombre"
                        type="text"
                        className={`${classes.margin}`}
                        variant="filled"
                        id="reddit-input-p_nombre"
                        onChange={ handleInputChange }
                        name="PrimerNombre"
                        value={PrimerNombre}
                      />
                    </div>
                    <div>
                      <RedditTextField
                        label="Primer apellido"
                        type="text"
                        className={`${classes.margin}`}
                        variant="filled"
                        id="reddit-input-p_apellido"
                        onChange={ handleInputChange }
                        name="PrimerApellido"
                        value={PrimerApellido}
                      />
                    </div>
                    <div>
                      <RedditTextField
                        label="Cédula"
                        type="text"
                        className={`${classes.margin}`}
                        variant="filled"
                        id="reddit-input-cedula"
                        onChange={ handleInputChange }
                        name="Cedula"
                        value={Cedula}
                      />
                    </div>
                    <div>
                      <RedditTextField
                        label="Correo electrónico"
                        type="email"
                        className={`${classes.margin}`}
                        variant="filled"
                        id="reddit-input-email"
                        onChange={ handleInputChange }
                        name="CorreoElectronico"
                        value={CorreoElectronico}
                      />
                    </div>
                    <div>
                      <RedditTextField
                        label="Iglesia que administras"
                        type="text"
                        className={`${classes.margin}`}
                        variant="filled"
                        id="reddit-input-igle"
                        onChange={ handleInputChange }
                        name="IglesiaAdministra"
                        value={IglesiaAdministra}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div>
                      <RedditTextField
                        label="Segundo nombre"
                        type="text"
                        className={`${classes.margin}`}
                        variant="filled"
                        id="reddit-input-s_nombre"
                        onChange={ handleInputChange }
                        name="SegundoNombre"
                        value={SegundoNombre}
                      />
                    </div>
                    <div>
                      <RedditTextField
                        label="Segundo apellido"
                        type="text"
                        className={`${classes.margin}`}
                        variant="filled"
                        id="reddit-input-s_apellido"
                        onChange={ handleInputChange }
                        name="SegundoApellido"
                        value={SegundoApellido}
                      />
                    </div>
                    <div>
                      <RedditTextField
                        label="Numero telefónico"
                        type="text"
                        className={`${classes.margin}`}
                        variant="filled"
                        id="reddit-input-n_telefono"
                        onChange={ handleInputChange }
                        name="NumeroTelefonico"
                        value={NumeroTelefonico}
                      ></RedditTextField>
                    </div>
                    <div>
                      <RedditTextField
                        label="Contraseña"
                        type="password"
                        className={`${classes.margin}`}
                        variant="filled"
                        id="reddit-input-pass"
                        onChange={ handleInputChange }
                        name="Password"
                        value={Password}
                      />
                    </div>
                    <div>
                      <RedditTextField
                        label="Puesto que desempeñas"
                        type="text"
                        className={`${classes.margin}`}
                        variant="filled"
                        id="reddit-input-p_desempenia"
                        onChange={ handleInputChange }
                        name="Puesto"
                        value={Puesto}
                      />
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  { /*
                   <input
                    id="fileSelector"
                    type="file"
                    name="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />

                  <div className="col-11 mt-2">
                    <button
                      type="button"
                      className="btn form-control text-dark"
                      style={{
                        fontFamily: "Ubuntu",
                        backgroundColor: "#fcfcfb",
                      }}
                      onClick={handlePictureClick}
                    >
                      Scan de tu contrato/carta
                    </button>
                  </div> */}
                  <div className="col-8 mt-3">
                    <button
                      type="button"
                      className="btn btn-primary form-control text-dark"
                      style={{ fontFamily: "Ubuntu" }}
                      onClick={ handleRegister }
                    >
                      Solicitar Registro
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
              Un momento... ¡Ya tengo una cuenta! Volver{" "}
              <Link
                to="/auth/admin"
                className="text-primary hoverLink"
                style={{}}
              >
                aquí
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      {/*<!-- Footer-->*/}
      <footer className="footer py-4 d-flex flex-end bg-light">
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
