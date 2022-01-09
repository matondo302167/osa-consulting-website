import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from './Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'contain',
    backgroundPosition: 'center 40%',
    backgroundRepeat: 'no-repeat'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    //background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    //left: 'calc(50% - 9px)',
    //transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/photoMenbresOsaConsulting%2Fsylver.jpeg?alt=media&token=68261f81-b69b-4cf9-afc1-b554141a434e',
      title: 'Sylver',
      width: '25%',
    },
    {
      url:
        'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/photoMenbresOsaConsulting%2Fyorick.jpg?alt=media&token=9907e5a6-3b9c-4d23-bc06-df6df0387909',
      title: 'Yorick',
      width: '25%',
    },
    {
      url:
        'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/photoMenbresOsaConsulting%2Fchristp.jpeg?alt=media&token=93d16522-edd5-431a-9957-6b579d65d2ae',
      title: 'Christopher',
      width: '25%',
    },
    {
      url:
        'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/photoMenbresOsaConsulting%2Fbenison_finale_foto.jpeg?alt=media&token=52762db3-87a3-4678-a99c-a00d556685bf',
      title: 'Benison',
      width: '25%',
    },
    {
      url:
        'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/webPictureCity%2FDB89A8D5-F0FF-49A1-AECC-AC386ADC3CAC.JPEG?alt=media&token=ac81e055-41db-4ad5-868c-1b4f4674a111',
      title: 'Axel',
      width: '33.33%',
    },
    {
      url:
        'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/webPictureCity%2FIMG-20210412-WA0002.jpg?alt=media&token=25b04602-e3bc-48bf-919c-5482cb8c354f',
      title: 'Anthony',
      width: '33.33%',
    },
    {
      url:
        'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/webPictureCity%2FIMG-20210418-WA0014.jpg?alt=media&token=9316bfaa-879d-4206-8a9c-e3413576e88f',
      title: 'Paterne',
      width: '33.33%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        L'équipe d'Osa Consulting
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);