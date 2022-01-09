import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/osa.png";
import { useHistory } from "react-router-dom";
import firebase from "../firebaseConfig";
import LoadingOverlay from 'react-loading-overlay'; 

const Input = () => {
  let history = useHistory();

  const [name,setName] =useState('');
  const [surname,setSurname] =useState('');
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const [loader, setLoader] = useState(true);
  //Handle change hooks state 
  const handleChangeName = (event) =>{
    setName(event.target.value);
  }

  const handleChangeSurname = (event) =>{
    setSurname(event.target.value);
  }

  const handleChangeEmail = (event) =>{
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) =>{
    setPassword(event.target.value);
  }

  const HandleFormSubmit = (event) =>{
    
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
      setLoader(true)
      //to get the user 
      var user = firebase.auth().currentUser;

      //verification email
      user.sendEmailVerification().then(function() {
        
        // Email sent.
        alert("mail envoyé avec succès à "+user.email)
      }).catch(function(error) {
        setLoader(true)
        // An error happened.
        alert('Erreur','Action non executée')
      });

      //firestore
      firebase.firestore().collection("Studente").doc(user.uid).set({
        Prenom: name,
        Nom: surname,
        E_mail: email,
        ImageUrl: "",
        Inscription: "",
        Bourse: "",
        Paiement: "",
        Telephone: ""
      })

      //data base
      firebase.database().ref('/Studente/'+user.uid).set({
        Prenom: name,
        Nom:surname,
        E_mail:email,
        Telephone: "",
        ImageUrl: "",
        payer: "",
        
    })

      history.push('/login')
    }).catch(error=>{
      setLoader(true)
       if (error.code === 'auth/invalid-disabled-fiel') {
         alert('assurez-vous que vous avez tout rempli')
       }
       else if (error.code === 'auth/invalid-email') {
         alert('adress e-mail non existant ')
         }
       else if (error.code === 'auth/email-already-in-use') {
         alert('adress e-mail déjà utilisé')
       }
       else if (error.code === 'auth/invalid-password') {
         alert('password faible')
       }
       else{
         alert('données inserés sont incorects')
       }
   })
   controlLoading();
  }

  function controlLoading(){
    if(loader){
      setLoader(false);
    }
  }
  return (
    <LoadingOverlay
    active={!loader}
    spinner
    text='Chargement...'
    >
      <Container>
        <LogoWrapper>
          <img onClick={()=>history.push('/')} src={logo} alt="" />
          <h3>
            Osa <br/> <span>Consulting</span>
          </h3>
        </LogoWrapper>
        <FormInput>
          <h3>Enregistrez-vous</h3>
          <ContainerInput>
            <StyledInput
              placeholder="Pré-nom"
              name="name"
              type="text"
              required
              autocomplete="off"
              onChange={handleChangeName}
            />
            <Status />
          </ContainerInput>
          <ContainerInput>
            <StyledInput
              placeholder="Nom"
              name="surname"
              type="text"
              required
              autocomplete="off"
              onChange={handleChangeSurname}
            />
            <Status />
          </ContainerInput>

          <ContainerInput>
            <StyledInput
              placeholder="email"
              name="email"
              type="email"
              required
              autocomplete="off"
              onChange={handleChangeEmail}
            />
            <Status />
          </ContainerInput>

          <ContainerInput>
            <StyledInput
              placeholder="password"
              name="password"
              type="password"
              required
              autocomplete="off"
              onChange={handleChangePassword}
            />
            <Status />
          </ContainerInput>
          <button onClick={HandleFormSubmit}>Inscrivez-vous</button>
        </FormInput>
        <div>
          <h4>
            Vous avez déjà un compte? <span onClick={()=>history.push('/login')}>Accedez</span>
          </h4>
        </div>
      </Container>
    </LoadingOverlay>
  );
};


const StyledInput = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  color: #000;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;
  ${StyledInput}:focus + & {
    background: #ffa689;
  }
  ${StyledInput}:invalid + & {
    background: #fe2f75;
  }
  ${StyledInput}:valid + & {
    background: #70edb9;
  }
`;


//form

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const FormInput = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }
  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }
  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(0px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export default Input;