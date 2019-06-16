import React, {useState} from 'react';
import Top from './top';
import Main from './main';
import './App.css'
import pikachu from './img/pikachu.png';
import bulbasaur from './img/bulbasaur.png';
import charmander from './img/charmander.png';
import crocadile from './img/crocadile.png';
import eevee from './img/eevee.png';
import flareon from './img/flareon.png';
import gengar from './img/gengar.png';
import jigglypuff from './img/jigglypuff.png';
import jolteon from './img/jolteon.png';
import pichu from './img/pichu.png';
import snorlax from './img/snorlax.png';
import squirtle from './img/squirtle.png';



function App() {
  let pkmonArr = [bulbasaur, charmander, crocadile, eevee, flareon, gengar, jigglypuff, jolteon, pichu, pikachu, snorlax, squirtle];
  let displayArr = [];
  const shuffle = arr => {
    displayArr = arr.sort(() => Math.random() - 0.5);
  }


  //States
  const [currentStart, currentAddOne] = useState(0);
  const [topStart, topNew] = useState(0);
  const [answer, setAnswer] = useState('');
  const [selectedArr, setSelectedArr] = useState([]);

  const cAdd = () => {
    currentAddOne(currentStart + 1);
  }
  const cCheck = () => {
    if(topStart <= currentStart + 1){
      topNew(currentStart +1);
    }
  }

  const updateAnswer = (x) => {
    if(x){
      setAnswer('You Win');
    }
    else{
      setAnswer('You Lose');
      clearSelectedArr();
    }
  }

  const clearSelectedArr = () => {
    setSelectedArr([]);
  }

  const pushSelectedArr = x => {
    setSelectedArr(() => [...selectedArr, x]);
  }

  // console.log(` this is the selected Arr: ${selectedArr} 
  //  this is the selected Arr Length: ${selectedArr.length}`);
  

  const aCheck = (src) => {
    // console.log('aCheck() was fired');
    if(selectedArr.length > 0){
      let find = selectedArr.indexOf(src);
      // console.log(`${src}
      // inside of aCheck, this is what we found: ${find}`);
      if(find === 0){
        console.log('you lose!!!!!!');
        updateAnswer(false);
        clearSelectedArr();
        currentAddOne(0);
      }
      else{
        console.log('YOU WIN!!!!');
        updateAnswer(true);
        pushSelectedArr(src);
      }

    }
    else{
      pushSelectedArr(src);
      setAnswer();
      // console.log(`selectedArr added ${src}`);
    }

    
  }

  const btnAction = (e) => {
    let src = e.target.src;
    cAdd();
    cCheck();
    aCheck(src);
  }



return (
  <div>
  <Top cScore = {currentStart} tScore = {topStart} answer = {answer}/>
    <div className = 'btnGrid'>
      {shuffle(pkmonArr)}
      {displayArr.map((val) => {
        return <Main key = {val} cAction = {btnAction} item = {val} />
      })}
    </div>
  

  </div>

)

}

export default App;