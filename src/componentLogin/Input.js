import React, { useState,useContext } from "react";
import styled from "styled-components";
import logo from "../assets/osa.png";
import { useHistory } from "react-router-dom";
import firebase from "../firebaseConfig";
import LoadingOverlay from 'react-loading-overlay'; 

const Input = () => {
  
  const [loader, setLoader] = useState(true);

  let history = useHistory();

  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');

  //Handle change hooks state 
  const handleChangeEmail = (event) =>{
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) =>{
    setPassword(event.target.value);
  }

  const HandleFormSubmit = (event) =>{
    
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password ).then(authUser => {
      setLoader(true)
      if(authUser.user.emailVerified){ //This will return true or false
        
        history.push('/profil-dashboard')
      }else{
        console.log('email not verified')
        alert('si vous etes le propritaire de E-mail inseré Veuillez de le confirmez par le mail envoyé dans votre compte')
      }
  }).catch(function(error) {
    setLoader(true)
    alert('mot de passe ou e-mail incorrect')
  });
  
    controlLoading()
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
        <h3>Accedez</h3>
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
        <button onClick={HandleFormSubmit}>Accedez</button>
      </FormInput>
      <div>
        <h4>
          Vous n'avez pas un compte? <span onClick={()=>history.push('/signup')}>Enregistrez-vous</span>
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
  height: 40px;
  border: none;
  color: #000;
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