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
  const[die,setDie]=useState(null);
  return (
    <div style={{ textAlign: 'center' ,background:'#AC1DF3'}}>
       <div style={{color:'white'}}><RollDice dicenumber= {dicenum}/> </div>
       <div><img src = {die} alt = {die}></img></div>
      <div style={{backgroundImage:buttonImg}}><button style={{height:50, width:150, background:"white", fontSize:24, fontFamily:"sans serif"}} onClick = {() => {
        let randnum = Math.floor(1+Math.random()*6);
        switch(randnum){
          case(1):{setDiceNum(1);
            setDie(die1);
            break;}
          case(2):{setDiceNum(2);
            setDie(die2);
            break;}
          case(3):{setDiceNum(3);
            setDie(die3);
            break;}
          case(4):{setDiceNum(4);
            setDie(die4);
            break;}
          case(5):{setDiceNum(5);
            setDie(die5);
            break;}
          case(6):{setDiceNum(6);
            setDie(die6);
            break;}
          default:
        }
        }}>Roll the die!</button>
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
