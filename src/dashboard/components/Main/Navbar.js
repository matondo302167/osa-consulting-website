import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styled from 'styled-components'
import firebase from '../../../firebaseConfig';
import {useHistory} from "react-router-dom"


const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`

const ProfileImg = styled.img`
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;
`

const MessageIcon = styled.span`
    color: ${({ theme }) => theme.colorGray}; 
    font-size: 27px;
    cursor: pointer;
    color: '#0000';
`
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [picture, setPicture] = React.useState("");
  const open = Boolean(anchorEl);

  const ProfileImage = 'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/images.png?alt=media&token=e50e9be6-b8b1-43d6-8783-e9e790bbf0a2';
  

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  let history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    firebase.auth().signOut()
  };
  //Dialog
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const readPicture = () => {
    var uid = firebase.auth().currentUser.uid;
    firebase 
      .firestore()
      .collection("Studente")
      .doc(uid)
      .onSnapshot( (snapshot) => {
        setPicture(snapshot.data().ImageUrl);
      })
  }
  return (
    <div >
      <AppBar style={{backgroundColor: ' #70edb9'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Mon Profil
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <ProfileImg src={picture === ""? ProfileImage : picture} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={()=>history.push("/")}>Sortir</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
