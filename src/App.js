import React from 'react';
import {useState} from 'react';
import die1 from "./dice/1.png"
import die2 from "./dice/2.png"
import die3 from "./dice/3.png"
import die4 from "./dice/4.png"
import die5 from "./dice/5.png"
import die6 from "./dice/6.png"
import buttonImg from "./dice/Roll the die.png"

function App() {
  const[dicenum,setDiceNum]=useState(0);
  let imgs = [die1, die2, die3, die4, die5, die6];
  
  //const[die,setDie]=useState(null);
  return (

    <div style={{ textAlign: 'center' ,background:'#AC1DF3'}}>
       <div style={{color:'white'}}><RollDice dicenumber= {dicenum}/></div>
       <div><img src = {imgs[dicenum-1]} alt = {imgs[dicenum-1]}></img></div>
      <div style={{backgroundImage:buttonImg}}>
        <button class = "button" style={{height:50, width:150, background:'purple',color:"white", fontSize:18,margin:'4px 2px',border:null,padding: '0px',display:'inline-block',cursor:'pointer'}} onClick = {() => {
        let randnum = Math.floor(Math.random()*6+1);
        setDiceNum(randnum);
        }}>
        Roll the die!</button>
        </div>
    </div>
    
  );
}

const RollDice = ({dicenumber}) => {
  if(dicenumber<=6&&dicenumber>=1){
  return(<div>
    <h1>The die landed on {dicenumber}!</h1>
    </div>);
    }
  else return(<div></div>)
  }
  

export default App;
