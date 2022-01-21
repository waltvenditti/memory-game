import React, { useEffect, useState } from "react";

import Card from "./Card";
import Header from "./Header";

import Advil from "./molecules/ibuprofen.png";
import Psil from "./molecules/psilocin.png";
import DMT from "./molecules/dmt.png";
import Sere from "./molecules/seretonin.png";
import Tylenol from "./molecules/acetaminophen.png";
import Mesc from "./molecules/mescaline.png";
import Caff from "./molecules/caffeine.png";
import Aspirin from "./molecules/aspirin.png";
import Dopa from "./molecules/dopamine.png";
import Trypt from "./molecules/tryptophan.png";
import Mela from "./molecules/melatonin.png";
import Theo from "./molecules/theobromine.png";

function App() {
  let [ints, setInts] = useState([0,1,2,3,4,5,6,7,8,9,10,11]);
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [chems, setChems] = useState([
    {
      name: "Ibuprofen",
      structure: Advil,
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
      name: "Seretonin",
      structure: Sere,
      clicked: false
    }, 
    {
      name: "Acetaminophen",
      structure: Tylenol,
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
      name: "Aspirin",
      structure: Aspirin,
      clicked: false
    }, 
    {
      name: "Dopamine",
      structure: Dopa,
      clicked: false
    }, 
    {
      name: "Tryptophan",
      structure: Trypt,
      clicked: false
    }, 
    {
      name: "Melatonin",
      structure: Mela,
      clicked: false
    }, 
    {
      name: "Theobromine",
      structure: Theo,
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
