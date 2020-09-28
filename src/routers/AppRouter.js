import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { login } from '../actions/auth';
import { AdminRoutes } from './AdminRoutes';
import { MainDashboardRoutes } from './MainDashboardRoutes';
import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PrivateAdminRoute } from './PrivateAdminRoute';
import { PublicRoute } from './PublicRoute';


const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: '#343a40',
    animationDuration: '550ms',
    position: 'absolute',
    left: '50%',
    marginTop: '20%',
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

export const AppRouter = (props) => {

  const classes = useStylesFacebook();
  


  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      
      firebase.auth().onAuthStateChanged( ( user ) => {

        if ( user?.uid ){

          dispatch( login( user.uid, user.displayName ) );
          setIsLoggedIn( true );

        } else{
          setIsLoggedIn( false );
        }

        setChecking( false );

      } );

    }, [dispatch, setChecking, setIsLoggedIn])

    if ( checking ){

      return(

        <div className={classes.root}>
          <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={40}
          thickness={4}
          {...props}
          />
        </div>

      )

    }

    return (
        <Router>
      <div>
        <Switch>

          <PrivateAdminRoute 
          path="/admin" 
          component={AdminRoutes}  
          isLoggedIn={ isLoggedIn }
          />

          <PublicRoute
          path="/" 
          component={MainDashboardRoutes}  
          isLoggedIn={ isLoggedIn }
          />

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
    )
}
