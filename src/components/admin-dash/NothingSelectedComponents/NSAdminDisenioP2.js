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

export const NSAdminDisenioP2 = () => {
  const classes = useStyles();

  const [state1, setstate1] = useState(null);
  const [state2, setstate2] = useState(null);
  const [state3, setstate3] = useState(null);
  const [state4, setstate4] = useState(null);
  const [state5, setstate5] = useState(null);

  const handleInput = (e, numero) => {
    switch (numero) {
      case 1:
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

  const [stateSwitch1, setstateSwitch1] = useState({ checkedA: false });
  const [stateSwitch2, setstateSwitch2] = useState({ checkedB: false });
  const [stateSwitch3, setstateSwitch3] = useState({ checkedC: false });
  const [stateSwitch4, setstateSwitch4] = useState({ checkedD: false });
  const [stateSwitch5, setstateSwitch5] = useState({ checkedE: false });

  const handleChange = (event, numero) => {
    switch (numero) {
      case 1:
        setstateSwitch1({
          ...stateSwitch1,
          [event.target.name]: event.target.checked,
        });
        break;
      case 2:
        setstateSwitch2({
          ...stateSwitch2,
          [event.target.name]: event.target.checked,
        });
        break;
      case 3:
        setstateSwitch3({
          ...stateSwitch3,
          [event.target.name]: event.target.checked,
        });
        break;
      case 4:
        setstateSwitch4({
          ...stateSwitch4,
          [event.target.name]: event.target.checked,
        });
        break;
      case 5:
        setstateSwitch5({
          ...stateSwitch5,
          [event.target.name]: event.target.checked,
        });
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

  const [navesValue, handleInputChange] = useForm();

  const numeroNaves = Object.values(navesValue);

  const NumeroNaves = parseInt(numeroNaves[0]);

  console.log(NumeroNaves);

  return (
    <>
      <h5 className="text-center mt-5 ubuntu">Espacio para individuales</h5>

      <div className="container mb-3 mt-1 ubuntu">
        <div className="row">
          <div className="container col-12 d-flex justify-content-center mt-5 ubuntu">
            <TextField
              id="standard-number"
              label="Numero de naves para individuales"
              type="number"
              name="naves"
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center mt-5 ubuntu">
        <div className="row">
          {/* {naves.map((nave, i) => ( */}
          <div
            className={`jumbotron col-6 bg-darken-4 ${
              NumeroNaves !== null && NumeroNaves >= 1 ? "" : "d-none"
            }`}
            key={1}
          >
            <h3>
              Para la nave de{" "}
              <strong>
                <u>individuales</u>
              </strong>{" "}
              número {1}:
            </h3>
            <hr className="my-4" style={{ borderTop: "1px solid black" }}></hr>
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
              <TextField
                id="standard-number"
                label={`Asientos en cada banca`}
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
                  <option value={data[0].value}>{data[0].label}</option>
                  <option value={data[1].value}>{data[1].label}</option>
                </select>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="alineacion" className="mt-3">
                        Vertical
                      </label>
                      <img
                        src={vertical}
                        className="img-fluid"
                        alt="Responsive image"
                      ></img>
                    </div>

                    <div className="col-6">
                      <label htmlFor="alineacion" className="mt-3">
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
              <label htmlFor="formControl1" className="mt-3 text-center">
                ¿Deseas establecer la <strong>primera banca</strong> de esta
                nave para los feligreses que{" "}
                <strong>no vienen en burbuja social</strong> y que poseen una
                <strong>movilidad reducida</strong>?
              </label>
              <div className="container d-flex justify-content-center mb-3 mt-5 ubuntu">
                <FormGroup id="formControl1">
                  <Typography component="div">
                    <Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>No</Grid>
                      <Grid item>
                        <AntSwitch
                          checked={stateSwitch1.checkedA}
                          onChange={(e) => handleChange(e, 1)}
                          name="checkedA"
                        />
                      </Grid>
                      <Grid item>Si</Grid>
                    </Grid>
                  </Typography>
                </FormGroup>
              </div>
            </div>
          </div>

          <div
            className={`jumbotron col-6 bg-darken-4 ${
              NumeroNaves !== null && NumeroNaves >= 2 ? "" : "d-none"
            } `}
            key={2}
          >
            <h3>
              Para la nave de{" "}
              <strong>
                <u>individuales</u>
              </strong>{" "}
              número {2}:
            </h3>
            <hr className="my-4" style={{ borderTop: "1px solid black" }}></hr>
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
              <TextField
                id="standard-number"
                label={`Asientos en cada banca`}
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
                  <option value={data[0].value}>{data[0].label}</option>
                  <option value={data[1].value}>{data[1].label}</option>
                </select>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="alineacion" className="mt-3">
                        Vertical
                      </label>
                      <img
                        src={vertical}
                        className="img-fluid"
                        alt="Responsive image"
                      ></img>
                    </div>

                    <div className="col-6">
                      <label htmlFor="alineacion" className="mt-3">
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
                <label htmlFor="formControl2" className="mt-3 text-center">
                  ¿Deseas establecer la <strong>primera banca</strong> de esta
                  nave para los feligreses que{" "}
                  <strong>no vienen en burbuja social</strong> y que poseen una
                  <strong>movilidad reducida</strong>?
                </label>
                <div className="container d-flex justify-content-center mb-3 mt-5 ubuntu">
                  <FormGroup id="formControl2">
                    <Typography component="div">
                      <Grid
                        component="label"
                        container
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item>No</Grid>
                        <Grid item>
                          <AntSwitch
                            checked={stateSwitch2.checkedB}
                            onChange={(e) => handleChange(e, 2)}
                            name="checkedB"
                          />
                        </Grid>
                        <Grid item>Si</Grid>
                      </Grid>
                    </Typography>
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`jumbotron col-6 bg-darken-4 ${
              NumeroNaves !== null && NumeroNaves >= 3 ? "" : "d-none"
            } `}
            key={3}
          >
            <h3>
              Para la nave de{" "}
              <strong>
                <u>individuales</u>
              </strong>{" "}
              número {3}:
            </h3>
            <hr className="my-4" style={{ borderTop: "1px solid black" }}></hr>
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
              <TextField
                id="standard-number"
                label={`Asientos en cada banca`}
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
                  <option value={data[0].value}>{data[0].label}</option>
                  <option value={data[1].value}>{data[1].label}</option>
                </select>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="alineacion" className="mt-3">
                        Vertical
                      </label>
                      <img
                        src={vertical}
                        className="img-fluid"
                        alt="Responsive image"
                      ></img>
                    </div>

                    <div className="col-6">
                      <label htmlFor="alineacion" className="mt-3">
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
              <label htmlFor="formControl3" className="mt-3 text-center">
                ¿Deseas establecer la <strong>primera banca</strong> de esta
                nave para los feligreses que{" "}
                <strong>no vienen en burbuja social</strong> y que poseen una
                <strong>movilidad reducida</strong>?
              </label>
              <div className="container d-flex justify-content-center mb-3 mt-5 ubuntu">
                <FormGroup id="formControl3">
                  <Typography component="div">
                    <Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>No</Grid>
                      <Grid item>
                        <AntSwitch
                          checked={stateSwitch3.checkedC}
                          onChange={(e) => handleChange(e, 3)}
                          name="checkedC"
                        />
                      </Grid>
                      <Grid item>Si</Grid>
                    </Grid>
                  </Typography>
                </FormGroup>
              </div>
            </div>
          </div>

          <div
            className={`jumbotron col-6 bg-darken-4 ${
              NumeroNaves !== null && NumeroNaves >= 4 ? "" : "d-none"
            } `}
            key={4}
          >
            <h3>
              Para la nave de{" "}
              <strong>
                <u>individuales</u>
              </strong>{" "}
              número {4}:
            </h3>
            <hr className="my-4" style={{ borderTop: "1px solid black" }}></hr>
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
              <TextField
                id="standard-number"
                label={`Asientos en cada banca`}
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
                  <option value={data[0].value}>{data[0].label}</option>
                  <option value={data[1].value}>{data[1].label}</option>
                </select>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="alineacion" className="mt-3">
                        Vertical
                      </label>
                      <img
                        src={vertical}
                        className="img-fluid"
                        alt="Responsive image"
                      ></img>
                    </div>

                    <div className="col-6">
                      <label htmlFor="alineacion" className="mt-3">
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
                <label htmlFor="formControl4" className="mt-3 text-center">
                  ¿Deseas establecer la <strong>primera banca</strong> de esta
                  nave para los feligreses que{" "}
                  <strong>no vienen en burbuja social</strong> y que poseen una
                  <strong>movilidad reducida</strong>?
                </label>
                <div className="container d-flex justify-content-center mb-3 mt-5 ubuntu">
                  <FormGroup id="formControl4">
                    <Typography component="div">
                      <Grid
                        component="label"
                        container
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item>No</Grid>
                        <Grid item>
                          <AntSwitch
                            checked={stateSwitch4.checkedD}
                            onChange={(e) => handleChange(e, 4)}
                            name="checkedD"
                          />
                        </Grid>
                        <Grid item>Si</Grid>
                      </Grid>
                    </Typography>
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`jumbotron col-6 bg-darken-4 ${
              NumeroNaves !== null && NumeroNaves >= 5 ? "" : "d-none"
            } `}
            key={5}
          >
            <h3>
              Para la nave de{" "}
              <strong>
                <u>individuales</u>
              </strong>{" "}
              número {5}:
            </h3>
            <hr className="my-4" style={{ borderTop: "1px solid black" }}></hr>
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
              <TextField
                id="standard-number"
                label={`Asientos en cada banca`}
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
                  <option value={data[0].value}>{data[0].label}</option>
                  <option value={data[1].value}>{data[1].label}</option>
                </select>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="alineacion" className="mt-3">
                        Vertical
                      </label>
                      <img
                        src={vertical}
                        className="img-fluid"
                        alt="Responsive image"
                      ></img>
                    </div>

                    <div className="col-6">
                      <label htmlFor="alineacion" className="mt-3">
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
              <label htmlFor="formControl5" className="mt-3 text-center">
                ¿Deseas establecer la <strong>primera banca</strong> de esta
                nave para los feligreses que{" "}
                <strong>no vienen en burbuja social</strong> y que poseen una
                <strong>movilidad reducida</strong>?
              </label>
              <div className="container d-flex justify-content-center mb-3 mt-5 ubuntu">
                <FormGroup id="formControl5">
                  <Typography component="div">
                    <Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>No</Grid>
                      <Grid item>
                        <AntSwitch
                          checked={stateSwitch5.checkedE}
                          onChange={(e) => handleChange(e, 5)}
                          name="checkedE"
                        />
                      </Grid>
                      <Grid item>Si</Grid>
                    </Grid>
                  </Typography>
                </FormGroup>
              </div>
            </div>
          </div>

          {/* ))} */}

        </div>
      </div>

          <div className="container d-flex justify-content-center mt-5 ubuntu">
            <div className="row">
                <button type="button" className="btn btn-outline-secondary">¡Generar diseño!</button>
            </div>
          </div>
    </>
  );
};
