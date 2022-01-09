import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../services/components/Button';
import Typography from './Typography';
import ProductHeroLayout from './ProductHeroLayout'

const backgroundImage ='https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/webPictureCity%2Fservice.jpg?alt=media&token=82bb6ffa-9111-4a5d-a008-2cd50846cd3a';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

const ProductHero = (props) =>{
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Nos services
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
      Nous vous offrons des services de qualité pour vos études en l'italie
      </Typography>
      <Button
        color="secondary"
        variant="outlined"
        size="large"
        className={classes.button}
        component="a"
        href="/serviceoffice"
      >
        Decouvrez
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Découvrez nos services pour vos études en italie
      </Typography>
    </ProductHeroLayout>
  );
}
ProductHero.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ProductHero);