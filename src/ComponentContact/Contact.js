import React, { useState } from "react";
import PizzaLeft from "../assets/svg-2.svg";
import firebase from "../firebaseConfig";
import "./contact.css";
import LoadingOverlay from 'react-loading-overlay';

const Contact = () => {
  //hook state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(true);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    firebase.firestore().collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(true);
        //alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
    controlLoading(); 
  };
 
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
    >//
        <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${PizzaLeft})` }}
        ></div>
        <div className="rightSide">
          <h1> Contactez-nous</h1>

          <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name" >Nom complet</label>
            <input 
              name="name" 
              placeholder="Entrez le nom complet..."  
              required 
              value={name}
              type="text" 
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input 
              name="email" 
              placeholder="Entrez email..."  
              required 
              value={email}
              type="email" 
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Redigez le message..."
              name="message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit"> Envoyez Message</button>
          </form>
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default Contact;