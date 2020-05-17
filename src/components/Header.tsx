import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Header.styles';

const useStyles = makeStyles(styles);

const Header: React.FC<any> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h2">
              {`🔨`}
            </Typography>
            <Typography variant="h4" className={classes.title}>
              {`Parts Store`}
            </Typography>
            <Link to="/">
              <Button> HOME</Button>
            </Link>
            <Link to="/create">
              <Button> CREATE</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
};

export default Header;
