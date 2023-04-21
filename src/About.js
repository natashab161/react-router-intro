import { React, useEffect, useState } from "react";

export default function About({ characters }) {

  return (
    <>
      <main>
        <h2>About</h2>
        {characters.map((character) => {
          return (
            <img
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
