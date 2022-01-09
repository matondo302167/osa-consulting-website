import React from 'react';
import Typical from 'react-typical';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../blur.css';
import content from '../content';
import useStartAnimation from '../hook/useStartAnimation';
import { Link as ScrollLink } from 'react-scroll';
//import {  } from 'react-router-dom';
export default function Header() {
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = 'translate-y-10 opacity-0';
  const animated = useStartAnimation();
  //let history = useh
  return (
    <div
      style={{
        backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/webPictureCity%2Fheader.jpg?alt=media&token=d55a9cde-70e2-4509-aa7c-ba419f000f6b")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="min-h-screen flex items-center justify-center"
      id="header"
    >
      <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between">
        <div className="w-full md:w-2/5 ">
          <LazyLoadImage
            src={content.header.img}
            alt="profile"
            className={`w-full mx-auto`}
            effect="blur"
            placeholderSrc={content.header.imgPlaceholder}
          />
        </div>

        <div className="font-dosis w-full md:w-3/5 text-center md:text-left ">
          <h2
            className={`text-3xl md:text-4xl lg:text-6xl text-white font-bold transform ${
              animated ? 'translate-y-0' : styleTranslate
            }  ${transition(2000)} `}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            //style={{color:'#f00946'}}
            className={`text-2xl md:text-4xl text-gray-400 transform ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3000)} `}
          >
            {content.header.text[2]}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
              wrapper="p"
            />
          </h1>

          <ScrollLink to="mywork" smooth={true}>
            <button
              className={` animate-bounce py-3 text-lg uppercase text-white text-4xl rounded-lg mt-10 transform  ${
                animated ? 'translate-y-0' : styleTranslate
              } ${transition(3500)}`}
              //onClick={()=>{}}
            >
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}