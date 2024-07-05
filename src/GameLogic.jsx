import { useState, useEffect } from "react";

export default function GameLogic({ pokemon, clicked }) {
  useEffect(() => {
    checkLoss();
    checkWin();
  }, [clicked]);

  function checkWin() {
    if (clicked.length === pokemon.length) {
      console.log("You win!");
    }
  }

  function checkLoss() {
    const lost = clicked.some((p) => pokemon.includes(p.id));
    if (lost) {
      console.log("You lose");
    }
  }
}
