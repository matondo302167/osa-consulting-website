import React from "react";
import styled from "styled-components";
//import bgImg from "../assets/b10.jpg";
import Main from "./Main";
import Input from "./Input";
const bgImg = "https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/webPictureCity%2Fauth.jpg?alt=media&token=e17af2de-a486-4923-96f3-f792de379561";
const App = () => {
  return (
    <Container>
      <Wrapper>
        <Input />
        <Main />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;