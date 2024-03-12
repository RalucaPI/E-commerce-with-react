import { useState, useEffect } from "react";

export const useVoice = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      setVoiceSupported(true);
    }
  }, []);

    const handleVoiceCommand = (command) => {
    const lowerCaseCommand = command.toLowerCase();

    if (lowerCaseCommand.includes("mergi la acasă")) {
      window.location.href = "/acasă";
    } else if (lowerCaseCommand.includes("acasă")) {
      window.location.href = "/acasă";

    } else if (lowerCaseCommand.includes("pisici")) {
      window.location.href = "/pisici";
    } else if (lowerCaseCommand.includes("mergi la pisici")) {
      window.location.href = "/pisici";
    } else if (lowerCaseCommand.includes("mergi la accesorii pisici")) {
      window.location.href = "/pisici/pisici-accesorii";
    } else if (lowerCaseCommand.includes("mergi la ansambluri pisici")) {
      window.location.href = "/pisici/pisici-ansambluri";
    } else if (lowerCaseCommand.includes("Mergi, la hrană de pisici")) {
      window.location.href = "/pisici/pisici-hrană";
    } else if (lowerCaseCommand.includes("mergi la castroane de pisici")) {
      window.location.href = "/pisici/pisici-castroane";
    } else if (lowerCaseCommand.includes("mergi la așternut pisici")) {
      window.location.href = "/pisici/pisici-așternut";
    } else if (lowerCaseCommand.includes("mergi la cuști pentru pisici")) {
      window.location.href = "/pisici/pisici-cuști";
    } else if (lowerCaseCommand.includes("mergi la igienă pentru pisici")) {
      window.location.href = "/pisici/pisici-igienă";
    } else if (lowerCaseCommand.includes("mergi la jucării pentru pisici")) {
      window.location.href = "/pisici/pisici-jucării";
    } else if (lowerCaseCommand.includes("mergi la lese pentru pisici")) {
      window.location.href = "/pisici/pisici-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("mergi la hamuri pentru pisici")) {
      window.location.href = "/pisici/pisici-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("mergi la zgărzi pentru pisici")) {
      window.location.href = "/pisici/pisici-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("mergi la litiere pentru pisici")) {
      window.location.href = "/pisici/pisici-litiere";
    } else if (lowerCaseCommand.includes("mergi la paturi pentru pisici")) {
      window.location.href = "/pisici/pisici-perne-paturi";
    } else if (lowerCaseCommand.includes("mergi la perne pentru pisici")) {
      window.location.href = "/pisici/pisici-perne-paturi";
    } else if (lowerCaseCommand.includes("mergi la pisici")) {
      window.location.href = "/pisici";
    } else if (lowerCaseCommand.includes("deschide pagina accesorii pisici")) {
      window.location.href = "/pisici/pisici-accesorii";
    } else if (lowerCaseCommand.includes("deschide pagina ansambluri pisici")) {
      window.location.href = "/pisici/pisici-ansambluri";
    } else if (lowerCaseCommand.includes("deschide pagina hrană de pisici")) {
      window.location.href = "/pisici/pisici-hrană";
    } else if (lowerCaseCommand.includes("deschide pagina castroane de pisici")) {
      window.location.href = "/pisici/pisici-castroane";
    } else if (lowerCaseCommand.includes("deschide pagina așternut pisici")) {
      window.location.href = "/pisici/pisici-așternut";
    } else if (lowerCaseCommand.includes("deschide pagina cuști pentru pisici")) {
      window.location.href = "/pisici/pisici-cuști";
    } else if (lowerCaseCommand.includes("deschide pagina igienă pentru pisici")) {
      window.location.href = "/pisici/pisici-igienă";
    } else if (lowerCaseCommand.includes("deschide pagina jucării pentru pisici")) {
      window.location.href = "/pisici/pisici-jucării";
    } else if (lowerCaseCommand.includes("deschide pagina lese pentru pisici")) {
      window.location.href = "/pisici/pisici-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("deschide pagina hamuri pentru pisici")) {
      window.location.href = "/pisici/pisici-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("deschide pagina zgărzi pentru pisici")) {
      window.location.href = "/pisici/pisici-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("deschide pagina litiere pentru pisici")) {
      window.location.href = "/pisici/pisici-litiere";
    } else if (lowerCaseCommand.includes("deschide pagina paturi pentru pisici")) {
      window.location.href = "/pisici/pisici-perne-paturi";
    } else if (lowerCaseCommand.includes("deschide pagina perne pentru pisici")) {
      window.location.href = "/pisici/pisici-perne-paturi";

    } else if (lowerCaseCommand.includes("mergi la câini")) {
      window.location.href = "/câini";
      
    } else if (lowerCaseCommand.includes("câini")) {
      window.location.href = "/câini";
    } else if (lowerCaseCommand.includes("mergi la accesorii câini")) {
      window.location.href = "/câini/câini-accesorii";
    } else if (lowerCaseCommand.includes("mergi la hrană de câini")) {
      window.location.href = "/câini/câini-hrană";
    } else if (lowerCaseCommand.includes("mergi la cuști pentru câini")) {
      window.location.href = "/câini/câini-cuști";
    } else if (lowerCaseCommand.includes("mergi la igienă pentru câini")) {
      window.location.href = "/câini/câini-igienă";
    } else if (lowerCaseCommand.includes("mergi la jucării pentru câini")) {
      window.location.href = "/câini/câini-jucării";
    } else if (lowerCaseCommand.includes("mergi la lese pentru câini")) {
      window.location.href = "/câini/câini-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("mergi la hamuri pentru câini")) {
      window.location.href = "/câini/câini-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("mergi la zgărzi pentru câini")) {
      window.location.href = "/câini/câini-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("mergi la perne pentru câini")) {
      window.location.href = "/câini/câini-perne";
    } else if (lowerCaseCommand.includes("mergi la castroane de câini")) {
      window.location.href = "/câini/câini-castroane";
    } else if (lowerCaseCommand.includes("deschide pagina accesorii câini")) {
      window.location.href = "/câini/câini-accesorii";
    } else if (lowerCaseCommand.includes("deschide pagina hrană de câini")) {
      window.location.href = "/câini/câini-hrană";
    } else if (lowerCaseCommand.includes("deschide pagina cuști pentru câini")) {
      window.location.href = "/câini/câini-cuști";
    } else if (lowerCaseCommand.includes("deschide pagina igienă pentru câini")) {
      window.location.href = "/câini/câini-igienă";
    } else if (lowerCaseCommand.includes("deschide pagina jucării pentru câini")) {
      window.location.href = "/câini/câini-jucării";
    } else if (lowerCaseCommand.includes("deschide pagina lese pentru câini")) {
      window.location.href = "/câini/câini-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("deschide pagina hamuri pentru câini")) {
      window.location.href = "/câini/câini-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("deschide pagina zgărzi pentru câini")) {
      window.location.href = "/câini/câini-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("deschide pagina perne pentru câini")) {
      window.location.href = "/câini/câini-perne";
    } else if (lowerCaseCommand.includes("deschide pagina castroane de câini")) {
      window.location.href = "/câini/câini-castroane";


    } else if (lowerCaseCommand.includes("mergi la păsări")) {
      window.location.href = "/păsări";
    } else if (lowerCaseCommand.includes("mergi la accesorii păsări")) {
      window.location.href = "/păsări/păsări-accesorii";
    } else if (lowerCaseCommand.includes("mergi la hrană de păsări")) {
      window.location.href = "/păsări/păsări-hrană";
    } else if (lowerCaseCommand.includes("mergi la colivii pentru păsări")) {
      window.location.href = "/păsări/păsări-colivii";
    } else if (lowerCaseCommand.includes("mergi la jucării pentru păsări")) {
      window.location.href = "/păsări/păsări-jucării";
    } else if (lowerCaseCommand.includes("mergi la adăpătoare de păsări")) {
      window.location.href = "/păsări/păsări-adăpătoare-hrănitoare";
    } else if (lowerCaseCommand.includes("mergi la hrănitoare de păsări")) {
      window.location.href = "/păsări/păsări-adăpătoare-hrănitoare";
    } else if (lowerCaseCommand.includes("deschide pagina accesorii păsări")) {
      window.location.href = "/păsări/păsări-accesorii";
    } else if (lowerCaseCommand.includes("deschide pagina hrană de păsări")) {
      window.location.href = "/păsări/păsări-hrană";
    } else if (lowerCaseCommand.includes("deschide pagina colivii pentru păsări")) {
      window.location.href = "/păsări/păsări-colivii";
    } else if (lowerCaseCommand.includes("deschide pagina jucării pentru păsări")) {
      window.location.href = "/păsări/păsări-jucării";
    } else if (lowerCaseCommand.includes("deschide pagina adăpătoare de păsări")) {
      window.location.href = "/păsări/păsări-adăpătoare-hrănitoare";
    } else if (lowerCaseCommand.includes("deschide pagina hrănitoare de păsări")) {
      window.location.href = "/păsări/păsări-adăpătoare-hrănitoare";

    } else if (lowerCaseCommand.includes("mergi la pești")) {
      window.location.href = "/pești";
    } else if (lowerCaseCommand.includes("mergi la accesorii pești")) {
      window.location.href = "/pești/pești-accesorii";
    } else if (lowerCaseCommand.includes("mergi la hrană de pești")) {
      window.location.href = "/pești/pești-hrană";
    } else if (lowerCaseCommand.includes("mergi la acvarii pentru pești")) {
      window.location.href = "/pești/pești-acvarii";
    } else if (lowerCaseCommand.includes("mergi la nisip pentru pești")) {
      window.location.href = "/pești/pești-nisip";
    } else if (lowerCaseCommand.includes("mergi la soluții de apă pentru pești")) {
      window.location.href = "/pești/pești-soluții-apă";
    } else if (lowerCaseCommand.includes("mergi la tratamente de pești")) {
      window.location.href = "/pești/pești-tratamente";
    } else if (lowerCaseCommand.includes("deschide pagina accesorii pești")) {
      window.location.href = "/pești/pești-accesorii";
    } else if (lowerCaseCommand.includes("deschide pagina hrană de pești")) {
      window.location.href = "/pești/pești-hrană";
    } else if (lowerCaseCommand.includes("deschide pagina acvarii pentru pești")) {
      window.location.href = "/pești/pești-acvarii";
    } else if (lowerCaseCommand.includes("deschide pagina nisip pentru pești")) {
      window.location.href = "/pești/pești-nisip";
    } else if (lowerCaseCommand.includes("deschide pagina soluții de apă pentru pești")) {
      window.location.href = "/pești/pești-soluții-apă";
    } else if (lowerCaseCommand.includes("deschide pagina tratamente de pești")) {
      window.location.href = "/pești/pești-tratamente";

    } else if (lowerCaseCommand.includes("mergi la rozătoare")) {
      window.location.href = "/rozătoare";
    } else if (lowerCaseCommand.includes("mergi la lese pentru rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("mergi la hamuri pentru rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("mergi la zgărzi pentru rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("mergi la accesorii rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-accesorii";
    } else if (lowerCaseCommand.includes("mergi la hrană de rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-hrană";
    } else if (lowerCaseCommand.includes("mergi la cuști pentru rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-cuști";
    } else if (lowerCaseCommand.includes("mergi la așternut pentru rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-așternut";
    } else if (lowerCaseCommand.includes("mergi la adăpătoare de rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-adăpătoare-hrănitoare";
    } else if (lowerCaseCommand.includes("mergi la hrănitoare de rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-adăpătoare-hrănitoare";
    } else if (lowerCaseCommand.includes("deschide pagina lese pentru rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("deschide pagina hamuri pentru rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("deschide pagina zgărzi pentru rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-lese-zgărzi-hamuri";
    } else if (lowerCaseCommand.includes("deschide pagina accesorii rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-accesorii";
    } else if (lowerCaseCommand.includes("deschide pagina hrană de rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-hrană";
    } else if (lowerCaseCommand.includes("deschide pagina cuști pentru rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-cuști";
    } else if (lowerCaseCommand.includes("deschide pagina așternut pentru rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-așternut";
    } else if (lowerCaseCommand.includes("deschide pagina adăpătoare de rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-adăpătoare-hrănitoare";
    } else if (lowerCaseCommand.includes("deschide pagina hrănitoare de rozătoare")) {
      window.location.href = "/rozătoare/rozătoare-adăpătoare-hrănitoare";

    } else if (lowerCaseCommand.includes("mergi la reptile")) {
      window.location.href = "/reptile";
    } else if (lowerCaseCommand.includes("mergi la adăpătoare de reptile")) {
      window.location.href = "/reptile/reptile-adăpătoare-hrănitoare";
    } else if (lowerCaseCommand.includes("mergi la hrănitoare de reptile")) {
      window.location.href = "/reptile/reptile-adăpătoare-hrănitoare";
    } else if (lowerCaseCommand.includes("mergi la accesorii reptile")) {
      window.location.href = "/reptile/reptile-accesorii";
    } else if (lowerCaseCommand.includes("mergi la hrană de reptile")) {
      window.location.href = "/reptile/reptile-hrană";
    } else if (lowerCaseCommand.includes("mergi la terarii pentru reptile")) {
      window.location.href = "/reptile/reptile-terarii";
    } else if (lowerCaseCommand.includes("mergi la așternut pentru reptile")) {
      window.location.href = "/reptile/reptile-așternut";
    } else if (lowerCaseCommand.includes("mergi la soluții de apă pentru reptile")) {
      window.location.href = "/reptile/reptile-soluții-apă";
    } else if (lowerCaseCommand.includes("deschide pagina adăpătoare de reptile")) {
      window.location.href = "/reptile/reptile-adăpătoare-hrănitoare";
    } else if (lowerCaseCommand.includes("deschide pagina hrănitoare de reptile")) {
      window.location.href = "/reptile/reptile-adăpătoare-hrănitoare";
    } else if (lowerCaseCommand.includes("deschide pagina accesorii reptile")) {
      window.location.href = "/reptile/reptile-accesorii";
    } else if (lowerCaseCommand.includes("deschide pagina hrană de reptile")) {
      window.location.href = "/reptile/reptile-hrană";
    } else if (lowerCaseCommand.includes("deschide pagina terarii pentru reptile")) {
      window.location.href = "/reptile/reptile-terarii";
    } else if (lowerCaseCommand.includes("deschide pagina așternut pentru reptile")) {
      window.location.href = "/reptile/reptile-așternut";
    } else if (lowerCaseCommand.includes("deschide pagina soluții de apă pentru reptile")) {
      window.location.href = "/reptile/reptile-soluții-apă";
    
    }

  };

  const listen = () => {
    const recognition = new (window.webkitSpeechRecognition ||
      window.SpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "ro-RO";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const { transcript } = event.results[0][0];
      setText(transcript);
      handleVoiceCommand(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Eroare:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return { text, isListening, listen, voiceSupported };
};
