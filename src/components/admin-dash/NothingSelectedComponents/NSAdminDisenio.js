import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useForm } from "../../../hooks/useForm";
import { useForm2 } from "../../../hooks/useForm2";
import { useDispatch } from "react-redux";
import { startNumeroNaveBS } from "../../../actions/navesBS";
import { NSAdminDisenioP2 } from "./NSAdminDisenioP2";
import "../../ui/AdminLeftSideNavbar.css";
import horizontal from "../../ui/assets/img/horizontal.png";
import vertical from "../../ui/assets/img/Vertical.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.primary.dark,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export const NSAdminDisenio = () => {
  const classes = useStyles();

  const [state1, setstate1] = useState(null);
  const [state2, setstate2] = useState(null);
  const [state3, setstate3] = useState(null);
  const [state4, setstate4] = useState(null);
  const [state5, setstate5] = useState(null);

  const handleInput = (e, numero) => {
    switch (numero) {
      case 1:
        console.log("value: ", e.target.value);
        setstate1(e.target.value);
        break;
      case 2:
        if (e.target.value === 1) {
          setstate2(e.target.value);
        } else if (e.target.value === 2) {
          setstate2(e.target.value);
        }
        break;
      case 3:
        if (e.target.value === 1) {
          setstate3(e.target.value);
        } else if (e.target.value === 2) {
          setstate3(e.target.value);
        }
        break;
      case 4:
        if (e.target.value === 1) {
          setstate4(e.target.value);
        } else if (e.target.value === 2) {
          setstate4(e.target.value);
        }
        break;
      case 5:
        if (e.target.value === 1) {
          setstate5(e.target.value);
        } else if (e.target.value === 2) {
          setstate5(e.target.value);
        }
        break;

      default:
        break;
    }
  };

  const data = [
    {
      value: 1,
      label: "Horizontal",
    },
    {
      value: 2,
      label: "Vertical",
    },
  ];

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // console.log(file);

    // if ( file ){
    //     dispatch( startUploading( file ) );
    // }
  };

  const [navesValue, handleInputChange] = useForm();

  const numeroNaves = Object.values(navesValue);

  const NumeroNaves = parseInt(numeroNaves[0]);

  const dispatch = useDispatch();

  const naves = [];

  for (let index = 1; index <= NumeroNaves; index++) {
    const posicion = index - 1;

    naves[posicion] = {numero: index};
  }

  dispatch(startNumeroNaveBS(naves));

  const [navesIndValue, handleInputChange2] = useForm2();

  const [state, setState] = React.useState({
    checkedA: false, //hay que cambiar esto a false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
                Diseño
              </li>
            </ol>
          </nav>

          <div className="jumbotron bg-dark animate__animated animate__fadeIn">
            <h1 className="display-4 text-primary ubuntu">
              ¡Es hora de registrar tu templo!
            </h1>
            <p className="lead text-light ubuntu">
              Sólamente llená el formulario
            </p>
          </div>

          <div>
            <form className={classes.root} noValidate autoComplete="off">
              <h1 className="display-3 text-center ubuntu">
                Información del párroco
              </h1>

              <div>
                <div className="container d-flex justify-content-center mb-3 ubuntu">
                  <TextField
                    id="standard-password-input"
                    label="Primer Nombre"
                    type="text"
                    autoComplete="off"
                  />
                  <TextField
                    id="standard-password-input"
                    label="Segundo Nombre"
                    type="text"
                    autoComplete="off"
                  />
                  <TextField
                    id="standard-password-input"
                    label="Primer Apellido"
                    type="text"
                    autoComplete="off"
                  />
                  <TextField
                    id="standard-password-input"
                    label="Segundo Apellido"
                    type="text"
                    autoComplete="off"
                  />
                </div>

                <div className="container d-flex justify-content-center mb-3">
                  <input
                    id="fileSelector"
                    type="file"
                    name="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    className="btn form-control text-primary w-75"
                    style={{
                      fontFamily: "Ubuntu",
                      backgroundColor: "#343a40",
                    }}
                    onClick={handlePictureClick}
                  >
                    Foto del párroco
                  </button>
                </div>

                <hr
                  className="my-4"
                  style={{ borderTop: "1px solid black" }}
                ></hr>

                <h1 className="display-3 text-center ubuntu">
                  Información del diseño
                </h1>

                <h5 className="text-center ubuntu">
                  Espacio para burbujas sociales
                </h5>

                <div className="container d-flex justify-content-center mb-3 mt-5 ubuntu">
                  <FormGroup>
                    <Typography component="div">
                      <Grid
                        component="label"
                        container
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item>
                          ¿Deseás establecer naves específicas para burbujas
                          sociales?{" "}
                        </Grid>
                        <Grid item>No</Grid>
                        <Grid item>
                          <AntSwitch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                          />
                        </Grid>
                        <Grid item>Si</Grid>
                      </Grid>
                    </Typography>
                  </FormGroup>
                </div>

                {state.checkedA ? (
                  <div className="container mb-3 mt-5 ubuntu">
                    <div className="row">
                      <div className="col-12">
                        <Alert severity="warning">
                          <AlertTitle>¡Atención!</AlertTitle>
                          El <strong className="text-capitalize">
                            máximo
                          </strong>{" "}
                          de asientos por una banca de tipo{" "}
                          <strong>Burbuja Social (BS)</strong>, es de{" "}
                          <strong>5</strong>, y su{" "}
                          <strong className="text-capitalize">mínimo</strong> es
                          de <strong>3</strong> —{" "}
                          <strong>¡Tenélo en cuenta para tu diseño!</strong>
                        </Alert>
                      </div>
                    </div>

                    <hr
                      className="my-4"
                      style={{ borderTop: "1px solid black" }}
                    ></hr>

                    <div className="row">
                      <div className="container col-12 d-flex justify-content-center mt-5 ubuntu">
                        <TextField
                          id="standard-number"
                          label="Numero de naves para BS"
                          type="number"
                          name="naves"
                          onChange={handleInputChange}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                      <div className="container d-flex justify-content-center mt-5 ubuntu">
                        <div className="row">
                          {/* {naves.map((nave, i) => ( */}
                          <div
                            className={`jumbotron col-6 bg-darken-4 ${
                              NumeroNaves !== null && NumeroNaves >= 1
                                ? ""
                                : "d-none"
                            }`}
                            key={1}
                          >
                            <h3>
                              Para la nave de{" "}
                              <strong>
                                <u>burbuja social</u>
                              </strong>{" "}
                              número {1}:
                            </h3>
                            <hr
                              className="my-4"
                              style={{ borderTop: "1px solid black" }}
                            ></hr>
                            <div className="container col-12">
                              <TextField
                                id="standard-number"
                                label={`Bancas en la nave ${1}`}
                                type="number"
                                name={`nave${1}`}
                                onChange={handleInputChange}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </div>
                            <div className="container col-12">
                              <div className="form-group">
                                <label htmlFor={`exampleFormControlSelect${1}`}>
                                  {`Alineación de la nave ${1}`}
                                </label>
                                <select
                                  onChange={(e) => handleInput(e, 1)}
                                  name={`nave${1}`}
                                  id={`exampleFormControlSelect${1}`}
                                  className="form-control"
                                >
                                  <option>Elige una opcion</option>
                                  <option value={data[0].value}>
                                    {data[0].label}
                                  </option>
                                  <option value={data[1].value}>
                                    {data[1].label}
                                  </option>
                                </select>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-6">
                                      <label
                                        htmlFor="alineacion"
                                        className="mt-3"
                                      >
                                        Vertical
                                      </label>
                                      <img
                                        src={vertical}
                                        className="img-fluid"
                                        alt="Responsive image"
                                      ></img>
                                    </div>

                                    <div className="col-6">
                                      <label
                                        htmlFor="alineacion"
                                        className="mt-3"
                                      >
                                        Horizontal
                                      </label>
                                      <img
                                        src={horizontal}
                                        className="img-fluid"
                                        alt="Responsive image"
                                      ></img>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`jumbotron col-6 bg-darken-4 ${
                              NumeroNaves !== null && NumeroNaves >= 2
                                ? ""
                                : "d-none"
                            } `}
                            key={2}
                          >
                            <h3>
                              Para la nave de{" "}
                              <strong>
                                <u>burbuja social</u>
                              </strong>{" "}
                              número {2}:
                            </h3>
                            <hr
                              className="my-4"
                              style={{ borderTop: "1px solid black" }}
                            ></hr>
                            <div className="container col-12">
                              <TextField
                                id="standard-number"
                                label={`Bancas en la nave ${2}`}
                                type="number"
                                name={`nave${2}`}
                                onChange={handleInputChange}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </div>
                            <div className="container col-12">
                              <div className="form-group">
                                <label htmlFor={`exampleFormControlSelect${2}`}>
                                  {`Alineación de la nave ${2}`}
                                </label>
                                <select
                                  onChange={(e) => handleInput(e, 2)}
                                  name={`nave${2}`}
                                  id={`exampleFormControlSelect${2}`}
                                  className="form-control"
                                  placeholder="Horizontal/Vertical"
                                >
                                  <option>Elige una opción</option>
                                  <option value={data[0].value}>
                                    {data[0].label}
                                  </option>
                                  <option value={data[1].value}>
                                    {data[1].label}
                                  </option>
                                </select>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-6">
                                      <label
                                        htmlFor="alineacion"
                                        className="mt-3"
                                      >
                                        Vertical
                                      </label>
                                      <img
                                        src={vertical}
                                        className="img-fluid"
                                        alt="Responsive image"
                                      ></img>
                                    </div>

                                    <div className="col-6">
                                      <label
                                        htmlFor="alineacion"
                                        className="mt-3"
                                      >
                                        Horizontal
                                      </label>
                                      <img
                                        src={horizontal}
                                        className="img-fluid"
                                        alt="Responsive image"
                                      ></img>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`jumbotron col-6 bg-darken-4 ${
                              NumeroNaves !== null && NumeroNaves >= 3
                                ? ""
                                : "d-none"
                            } `}
                            key={3}
                          >
                            <h3>
                              Para la nave de{" "}
                              <strong>
                                <u>burbuja social</u>
                              </strong>{" "}
                              número {3}:
                            </h3>
                            <hr
                              className="my-4"
                              style={{ borderTop: "1px solid black" }}
                            ></hr>
                            <div className="container col-12">
                              <TextField
                                id="standard-number"
                                label={`Bancas en la nave ${3}`}
                                type="number"
                                name={`nave${3}`}
                                onChange={handleInputChange}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </div>
                            <div className="container col-12">
                              <div className="form-group">
                                <label htmlFor={`exampleFormControlSelect${3}`}>
                                  {`Alineación de la nave ${3}`}
                                </label>
                                <select
                                  onChange={(e) => handleInput(e, 3)}
                                  name={`nave${3}`}
                                  id={`exampleFormControlSelect${3}`}
                                  className="form-control"
                                >
                                  <option>Elige una opción</option>
                                  <option value={data[0].value}>
                                    {data[0].label}
                                  </option>
                                  <option value={data[1].value}>
                                    {data[1].label}
                                  </option>
                                </select>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-6">
                                      <label
                                        htmlFor="alineacion"
                                        className="mt-3"
                                      >
                                        Vertical
                                      </label>
                                      <img
                                        src={vertical}
                                        className="img-fluid"
                                        alt="Responsive image"
                                      ></img>
                                    </div>

                                    <div className="col-6">
                                      <label
                                        htmlFor="alineacion"
                                        className="mt-3"
                                      >
                                        Horizontal
                                      </label>
                                      <img
                                        src={horizontal}
                                        className="img-fluid"
                                        alt="Responsive image"
                                      ></img>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`jumbotron col-6 bg-darken-4 ${
                              NumeroNaves !== null && NumeroNaves >= 4
                                ? ""
                                : "d-none"
                            } `}
                            key={4}
                          >
                            <h3>
                              Para la nave de{" "}
                              <strong>
                                <u>burbuja social</u>
                              </strong>{" "}
                              número {4}:
                            </h3>
                            <hr
                              className="my-4"
                              style={{ borderTop: "1px solid black" }}
                            ></hr>
                            <div className="container col-12">
                              <TextField
                                id="standard-number"
                                label={`Bancas en la nave ${4}`}
                                type="number"
                                name={`nave${4}`}
                                onChange={handleInputChange}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </div>
                            <div className="container col-12">
                              <div className="form-group">
                                <label htmlFor={`exampleFormControlSelect${4}`}>
                                  {`Alineación de la nave ${4}`}
                                </label>
                                <select
                                  onChange={(e) => handleInput(e, 4)}
                                  name={`nave${4}`}
                                  id={`exampleFormControlSelect${4}`}
                                  className="form-control"
                                >
                                  <option>Elige una opción</option>
                                  <option value={data[0].value}>
                                    {data[0].label}
                                  </option>
                                  <option value={data[1].value}>
                                    {data[1].label}
                                  </option>
                                </select>

                                <div className="container">
                                  <div className="row">
                                    <div className="col-6">
                                      <label
                                        htmlFor="alineacion"
                                        className="mt-3"
                                      >
                                        Vertical
                                      </label>
                                      <img
                                        src={vertical}
                                        className="img-fluid"
                                        alt="Responsive image"
                                      ></img>
                                    </div>

                                    <div className="col-6">
                                      <label
                                        htmlFor="alineacion"
                                        className="mt-3"
                                      >
                                        Horizontal
                                      </label>
                                      <img
                                        src={horizontal}
                                        className="img-fluid"
                                        alt="Responsive image"
                                      ></img>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`jumbotron col-6 bg-darken-4 ${
                              NumeroNaves !== null && NumeroNaves >= 5
                                ? ""
                                : "d-none"
                            } `}
                            key={5}
                          >
                            <h3>
                              Para la nave de{" "}
                              <strong>
                                <u>burbuja social</u>
                              </strong>{" "}
                              número {5}:
                            </h3>
                            <hr
                              className="my-4"
                              style={{ borderTop: "1px solid black" }}
                            ></hr>
                            <div className="container col-12">
                              <TextField
                                id="standard-number"
                                label={`Bancas en la nave ${5}`}
                                type="number"
                                name={`nave${5}`}
                                onChange={handleInputChange}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </div>
                            <div className="container col-12">
                              <div className="form-group">
                                <label htmlFor={`exampleFormControlSelect${5}`}>
                                  {`Alineación de la nave ${5}`}
                                </label>
                                <select
                                  onChange={(e) => handleInput(e, 5)}
                                  name={`nave${5}`}
                                  id={`exampleFormControlSelect${5}`}
                                  className="form-control"
                                >
                                  <option>Elige una opción</option>
                                  <option value={data[0].value}>
                                    {data[0].label}
                                  </option>
                                  <option value={data[1].value}>
                                    {data[1].label}
                                  </option>
                                </select>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-6">
                                      <label
                                        htmlFor="alineacion"
                                        className="mt-3"
                                      >
                                        Vertical
                                      </label>
                                      <img
                                        src={vertical}
                                        className="img-fluid"
                                        alt="Responsive image"
                                      ></img>
                                    </div>

                                    <div className="col-6">
                                      <label
                                        htmlFor="alineacion"
                                        className="mt-3"
                                      >
                                        Horizontal
                                      </label>
                                      <img
                                        src={horizontal}
                                        className="img-fluid"
                                        alt="Responsive image"
                                      ></img>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* ))} */}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                <NSAdminDisenioP2 />

              </div>
            </form>
          </div>
        </div>
      </section>
      {/*<!-- Footer-->*/}
      <footer className="footer py-4 d-flex flex-end">
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
