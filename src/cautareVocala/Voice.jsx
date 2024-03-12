import React, { useState, useEffect } from 'react'
import './voice.css'
import { useVoice } from "./useVoice";
import Mic from "./microphone-black-shape.svg";

export const Voice = () => {
  const { text, isListening, listen, voiceSupported } = useVoice();

  useEffect(() => {
    if (text !== "") {
      redirectToPage(text);
    }
  }, [text]);

  const redirectToPage = (command) => {
    const keywords = ["deschide", "mergi la", "caută","deschide pagina"];
    let targetPage = null;

    keywords.forEach((keyword) => {
      if (command.includes(keyword)) {
        const startIndex = command.indexOf(keyword) + keyword.length;
        const pageName = command.substring(startIndex).trim();

        if (pageName === "pisici") {
          targetPage = "/pisici"; 
        }
        else if (pageName === "/câini") {
          targetPage = "/câini"; 
        }
        else if (pageName === "/păsări") {
          targetPage = "/păsări"; 
        }
        else if (pageName === "/pești") {
          targetPage = "/pești"; 
        }
        else if (pageName === "/reptile") {
          targetPage = "/reptile"; 
        }
        else if (pageName === "/rozătoare") {
          targetPage = "/rozătoare"; 
        }

      }
    });

    if (targetPage) {
      window.location.href = targetPage;
    }
  };

  if (!voiceSupported) {
    return (
      <div className="Voice">
        <h1>
          Cautarea vocala nu este suportata in acest browser
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className='vocala'>
      <div className="Voice">
        <h2>Căutare vocală</h2>
        <h3>Apasă pe microfon și spune comanda</h3>
        <div>
          <img
            className={`microphone ${isListening && "isListening"}`}
            src={Mic}
            alt="microphone"
            onClick={listen}
          />
        </div>
        <p>{text}</p>
        </div>
      </div>
    </>
  );
};


