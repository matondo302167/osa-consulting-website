import React from "react";
import "./App.css";
import { Link as ScrollLink } from 'react-scroll';
const Prices = () => {
  const [header] = React.useState({
    mainHeader: "CHOISISSEZ VOTRE PACK",
    subHeading: "Le prix des packs.",
    text:
      "Chaque pack varie en fonction des services fournis.\
      nous vous prions de cliquer et de découvrir le pack qui vous intéresse.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Basic",
      price: 228,
      msg1: "En 1 tranche",
      msg2: "40% de nos Services",
      msg3: "60% de services Basics",
      msg4: "A  payer d'un seul coup",
    },
    {
      id: 2,
      heading: "Smart",
      price: 381,
      msg1: "En 2 tranches",
      msg2: "80% de nos Services",
      msg3: "90% de services Basics",
      msg4: "€335 Prémiere tranche",
    },
    {
      id: 3,
      heading: "Premium",
      price: 457,
      msg1: "En 2 tranches",
      msg2: "Tous les services",
      msg3: "TTous les services basics garantis",
      msg4: "€400 Prémière tranche",
    },
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">${prices.heading}</div>
                <div className="price__rs">
                  <span>€</span>
                  {prices.price}
                </div>
                <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                  <li>{prices.msg3}</li>
                  <li>{prices.msg4}</li>
                </ul>
                <div className="price__btn">
                <ScrollLink to="contact" smooth={true}>
                  <a href="" className="btn btn-outline">
                      En savoir plus
                  </a>
                </ScrollLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
