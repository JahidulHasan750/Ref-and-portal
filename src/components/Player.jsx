import { useRef } from "react";
import { useState } from "react";

export default function Player() {

  const name = useRef();
  const [player, setPlayer]=useState('');
 
 
  function handleClick(){
    setPlayer(name.current.value);
    name.current.value= '';
  }
  return (
    <section id="player">
      <h2>Welcome {player ?? 'unknown entity' }</h2>
      <p>
        <input ref={name} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
