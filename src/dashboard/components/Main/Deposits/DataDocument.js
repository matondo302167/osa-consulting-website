import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import BtnInscription from './BtnInscription'
import BtnBourse from './BtnBourse';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import BtnPaiment from './BtnPaiment';
import firebase from '../../../../firebaseConfig';
const Container = styled.div`

`

const Title = styled.h1`
    font-weight: 500;
    color:  ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
    display: flex;
    align-items: center;
`

const DepositsCount = styled.div`
    margin-left: 1rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.headerNumber};
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`


const Contains = styled.div`
    display: flex;
    padding: 1rem 1rem;
    background-color: ${({ theme }) => theme.secondary};
    margin: 1rem 0;
    border-radius: 5px;
`
const ContainsData = styled.div`
    display: flex;
    padding: 1rem 1rem;
    background-color: #fff;
    margin: 5rem 0;
    border-radius: 5px;
`
const Text = styled.h1`
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 70%;
    color: ${({ theme }) => theme.textColor};
`

const Property = styled(Text)`
    width: 100%;
`

const Deposits = ({title,count}) => {

    const [inscription,setInscription] = useState('');
    const [bourse,setBourse] = useState('');
    const [paiement,setPaiement] = useState('');

    useEffect( () => {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              var uid = user.uid;

                //let uid = firebase.auth().currentUser.uid;
            firebase 
                .firestore()
                .collection("Studente")
                .doc(uid)
                .onSnapshot( (snapshot) => {
                    setInscription(snapshot.data().Inscription);
                    setBourse(snapshot.data().Bourse);
                    setPaiement(snapshot.data().Paiement);
                })
              // 👈 Your code that needs an active user goes here
            } else {
                //user.signOut()
            }
          });

    },[firebase.auth().currentUser]);

    return (
        <Container>
            <div style={{marginTop:90}}></div>
            <Title>{title}<DepositsCount>{count}</DepositsCount></Title>
            <Contains>
                <Property>Inscription</Property>
                <Property>{inscription === ''? "aucun document chargé" : "documents chargés" }</Property>
                <BtnInscription/>
            </Contains>
            <Contains>
                <Property>bourse</Property>
                <Property>{bourse === ''? "aucun document chargé" : "documents chargés"}</Property>
                <BtnBourse/>
            </Contains>
            <Contains>
                <Property>paiment</Property>
                <Property>{paiement === ''? "aucun document chargé" : "documents chargés"}</Property>
                <BtnPaiment/>
            </Contains>           
        </Container>
    )
}

export default Deposits
