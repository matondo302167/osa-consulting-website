import React from 'react'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditBourse from '../Edit/Bourse';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
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

const BtnBourse = ({ title }) => {
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

  const handleClose = () => {
    setOpen(false);
  };
    return(
       <div>
            <CreateSharpIcon onClick={handleClickOpen}/>
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Charger les documents</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        nous vous conseillons d'inserer les documents en format pdf si 
                        vous aviez de doutes n'hesitez pas de nous contacter 
                    </DialogContentText>
                    <EditBourse/>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        terminer
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
       </div>

        
    )
}

export default BtnBourse;
