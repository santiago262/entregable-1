import React, { useState } from 'react';
import './App.css';
import getRamdomFrom from './utils/getRamdomFrom';
import array from "./utils/phrasse.json";
import UserData from './utils/UserData';
import Button from './componet/button'
import getRandomNumber from './utils/getRandomNumber';


function App() {
  const initialValue = getRamdomFrom(array);
  const [phraseRandom, setPhraseRandom] = useState(initialValue);
  const [animate, setAnimate] = useState(true); 
  const [backgroundImage, setBackgroundImage] = useState('/fondo1.png');

 
  const changeBackgroundImage = () => {
    
    const newBackgroundImage = `/fondo${getRandomNumber()}.png`;
   
    setBackgroundImage(newBackgroundImage);
    var body = document.getElementById('body');
    body.style.backgroundImage = `url(${backgroundImage})`
  };

  const changePhraseWithTransition = () => {
    changeBackgroundImage()
    setAnimate(false);

    setTimeout(() => {
     
      setPhraseRandom(getRamdomFrom(array));

     
      setTimeout(() => {
        setAnimate(true);
      }, 50); 
    }, 250); 
  };
 

  return (
    <>
    <h2>galleta de la fortuna</h2>
      <div class='container'>
      <UserData user={phraseRandom} animate={animate}/>
      <Button onClick={changePhraseWithTransition} /> 
      
    </div>
    <div class="footer"><p>{phraseRandom.author}</p></div>
    
    </>
  );
}

export default App;