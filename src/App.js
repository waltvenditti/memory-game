import React, { useState } from "react";

import Card from "./Card";
import Header from "./Header";

import LSD from "./molecules/lsd.png";
import Psil from "./molecules/psilocin.png";
import DMT from "./molecules/dmt.png";
import MDMA from "./molecules/mdma.png";
import Fly from "./molecules/2cb-fly.png";
import Mesc from "./molecules/mescaline.png";
import Caff from "./molecules/caffeine.png";
import CBD from "./molecules/cbd.png";
import Fent from "./molecules/fentanyl.png";
import Dia from "./molecules/heroin.png";
import Morph from "./molecules/morphine.png";
import Nico from "./molecules/nicotine.png";

function App() {
  const [score, setScore] = useState(0);

  const [chems, setChems] = useState([LSD, Psil, DMT, MDMA, Fly, Mesc, Caff, CBD, Fent, Dia, Morph, Nico])

  const incrementScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <Header score={score} />
      <div className="Cards">
        <Card 
          chem={LSD} 
          chemName="LSD" 
          incrementScore={incrementScore} 
        />
        <Card 
          chem={Psil} 
          chemName="Psilocin" 
          incrementScore={incrementScore} 
        />
        <Card 
          chem={DMT} 
          chemName="DMT" 
          incrementScore={incrementScore} 
        />
        <Card 
          chem={MDMA} 
          chemName="MDMA" 
          incrementScore={incrementScore} 
        />
        <Card 
          chem={Fly} 
          chemName="2CB-Fly" 
          incrementScore={incrementScore} 
        />
        <Card
          chem={Mesc}
          chemName="Mescaline"
          incrementScore={incrementScore}
        />
        <Card 
          chem={Caff} 
          chemName="Caffeine" 
          incrementScore={incrementScore} 
        />
        <Card 
          chem={CBD} 
          chemName="CBD" 
          incrementScore={incrementScore} 
        />
        <Card
          chem={Fent}
          chemName="Fentanyl (Grey Death)"
          incrementScore={incrementScore}
        />
        <Card
          chem={Dia}
          chemName="Heroin (Diamorphine)"
          incrementScore={incrementScore}
        />
        <Card
          chem={Morph}
          chemName="Morphine"
          incrementScore={incrementScore}
        />
        <Card 
          chem={Nico} 
          chemName="Nicotine" 
          incrementScore={incrementScore} 
        />
      </div>
    </div>
  );
}

export default App;
