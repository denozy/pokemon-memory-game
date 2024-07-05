import { useState, useEffect } from "react";

export default function GameLogic({ pokemon, clicked }) {
  useEffect(() => {
    checkWin();
  }, [clicked]);

  function checkWin() {
    if (clicked.length === pokemon.length) {
      console.log("You win!");
    }
  }
}
