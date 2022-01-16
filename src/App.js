import React, { useEffect, useState } from "react";

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
  let [ints, setInts] = useState([0,1,2,3,4,5,6,7,8,9,10,11]);
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [chems, setChems] = useState([
    {
      name: "LSD",
      structure: LSD,
      clicked: false
    },
    {
      name: "Psilocin",
      structure: Psil,
      clicked: false
    },
    {
      name: "DMT",
      structure: DMT,
      clicked: false
    },
    {
      name: "MDMA",
      structure: MDMA,
      clicked: false
    }, 
    {
      name: "2CB-Fly",
      structure: Fly,
      clicked: false
    }, 
    {
      name: "Mescaline",
      structure: Mesc,
      clicked: false
    }, 
    {
      name: "Caffeine",
      structure: Caff,
      clicked: false
    }, 
    {
      name: "CBD (Cannabidiol)",
      structure: CBD,
      clicked: false
    }, 
    {
      name: "Fentanyl (Grey Death)",
      structure: Fent,
      clicked: false
    }, 
    {
      name: "Diamoprhine (Heroin)",
      structure: Dia,
      clicked: false
    }, 
    {
      name: "Morphine",
      structure: Morph,
      clicked: false
    }, 
    {
      name: "Nicotine",
      structure: Nico,
      clicked: false,
    }, 
  ])

  const incrementScore = (event) => {
    const name = getName(event.target);
    console.log(name);
    const chemInfo = getChemAndIndexFromName(name);
    const chem = chemInfo[0];
    const chemIndex = chemInfo[1];
    console.log(chem, chemIndex);
    if (!chem.clicked) {
      setScore(score + 1);
      if (score >= highScore) setHighScore(highScore+1);
      chem.clicked = !chem.clicked;
      const newChems = chems;
      newChems[chemIndex] = chem;
      setChems(newChems);
    } else {
      setScore(0);
      resetChemClicked();
    }
    setInts(ints = genRandomArray());
  };

  const resetChemClicked = () => {
    const newChems = chems;
    for (let i = 0; i < newChems.length; i++) {
      if (newChems[i].clicked) {
        newChems[i].clicked = !newChems[i].clicked;
      }
    }
    setChems(newChems);
  }

  const getName = (node) => {
    if (node.nodeName === "DIV" || node.nodeName === "P") return node.textContent;
    if (node.nodeName === "IMG") return node.alt;
  }

  const getChemAndIndexFromName = (chemName) => {
    let index;
    for (let i = 0; i < chems.length; i++) {
      if (chems[i].name === chemName) index = i;
    }
    return [chems[index], index];
  }

  const genRandomArray = () => {
    let numbers = [0,1,2,3,4,5,6,7,8,9,10,11];
    for (let i = numbers.length-1; i > 0; i--) {
      let j = Math.floor(Math.random()*i);
      let k = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = k;
    }
    return(numbers); 
  }

  return (
    <div className="App">
      <Header score={score} highScore={highScore}/>
      <div className="Cards">
        <Card 
          chem={chems[ints[0]]} 
          incrementScore={incrementScore} 
        />
        <Card 
          chem={chems[ints[1]]} 
          incrementScore={incrementScore} 
        />
        <Card 
          chem={chems[ints[2]]} 
          incrementScore={incrementScore} 
        />
        <Card 
          chem={chems[ints[3]]} 
          incrementScore={incrementScore} 
        />
        <Card 
          chem={chems[ints[4]]} 
          incrementScore={incrementScore} 
        />
        <Card
          chem={chems[ints[5]]} 
          incrementScore={incrementScore}
        />
        <Card 
          chem={chems[ints[6]]} 
          incrementScore={incrementScore} 
        />
        <Card 
          chem={chems[ints[7]]} 
          incrementScore={incrementScore} 
        />
        <Card
          chem={chems[ints[8]]} 
          incrementScore={incrementScore}
        />
        <Card
          chem={chems[ints[9]]} 
          incrementScore={incrementScore}
        />
        <Card
          chem={chems[ints[10]]} 
          incrementScore={incrementScore}
        />
        <Card 
          chem={chems[ints[11]]} 
          incrementScore={incrementScore} 
        />
      </div>
    </div>
  );
}

export default App;
