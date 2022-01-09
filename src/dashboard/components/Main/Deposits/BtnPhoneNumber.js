import React from 'react'
import styled from 'styled-components'

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiPhoneNumber from "material-ui-phone-number";
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import firebase from "../../../../firebaseConfig";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
`

const Button = styled.a`
    text-transform: uppercase;
    width: 9rem;
    font-size: 0.6rem;
    font-weight: 700;
    background-image: ${({ theme }) => theme.gradient};
    color: #FFF;
    border-radius: 5rem;
    padding: 0.7rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all ease-in-out 300ms;

    &:hover {
        box-shadow: 0px 0px 7px rgba(128,74,216,0.6);
    }
`

const BtnPhoneNumber = ({ title }) => {

    React.useEffect( () => {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              udapte()
              // 👈 Your code that needs an active user goes here
            } else {
                //user.signOut()
            }
          });

    },[firebase.auth().currentUser]);

    let history = useHistory();
    const [open, setOpen] = React.useState(false);

    const [telephone,setTelephone] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const udapte = () =>{
        var userUid = firebase.auth().currentUser.uid;
        if(telephone !== ""){
            firebase
            .firestore()
            .collection("Studente")
            .doc(userUid)
            .update({
                Telephone: telephone
            })
        }else{

        }
        
        handleClose()
    }
    return(
       <div>
            <CreateSharpIcon onClick={handleClickOpen}/>
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Donné personnelles</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        nous vous assurons que vos données resteront toujours confidentielles
                    </DialogContentText>

                    <MuiPhoneNumber 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                        defaultCountry={"ga"}
                        id="phone"
                        onChange={txtPhone => setTelephone(txtPhone)}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Annuler
                    </Button>
                    <Button onClick={udapte} color="primary">
                        Modifier
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
       </div>   
    )
}

export default BtnPhoneNumber;
