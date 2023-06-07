import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About({ characters }) {

const navigate = useNavigate()

  return (
    <>
      <main>
        <h2>About</h2>
        {characters.map((character) => {
          return (
            <img
              onClick={() => {navigate(`characters/${character.id}`, { state: character })}}
              key={character.id}
              height="300px"
              src={character.image}
            ></img>
          );
        })}
      </main>
    </>
  )
}
