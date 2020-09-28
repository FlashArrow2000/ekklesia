import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import '../../styles/styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "99%",
    margin: "0px auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    fontWeight: 'bold'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export const InfoRegistrarIglesias = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <section className="page-section mt-5" id="services">
        <div className="container">
          <div className="jumbotron bg-dark animate__animated animate__fadeIn">
            <h1 className="display-4 text-primary ">
              ¿Perteneces a la administración de un templo?
            </h1>
            <p className="lead text-white" style={{fontFamily: "Ubuntu"}}>
              Sigue estos dos pasos para que los feligreses vayan a tu templo.
            </p>
            <hr
              className="my-4 text-white"
              style={{ borderTop: "1px solid white" }}
            ></hr>

            {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}

            <div className={classes.root}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>Paso 1</Typography>
                  <Typography className={classes.secondaryHeading}>
                    Transparencia
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Quien vaya a registrar la iglesia, <strong>tendrá que ser parte de
                    la administración de la misma</strong>. Ya sea el párroco, la o el
                    sacristán, o bien, personal de la secretaría. Todo personal
                    deberá de estar registrado en el <strong>Consejo Parroquial</strong>.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>Paso 2</Typography>
                  <Typography className={classes.secondaryHeading}>
                    Nueva cuenta
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Quién vaya a registrar la iglesia, <strong>tendrá que crear una
                    cuenta</strong>. Para ello, puedes dar click{" "}
                    <Link to="/auth/admin" className="text-info">
                      aquí
                    </Link>{" "}
                    y te redireccionaremos, o ir a la sección de Administración,
                    ubicado en el menú. Tu cuenta estará pendiente de activar y
                    se te enviará una notificación cuando tu cuenta esté activa.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
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
    </>
  );
};
