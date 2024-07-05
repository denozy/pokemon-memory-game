import { useState, useEffect } from "react";

export default function GameLogic({
  pokemon,
  clicked,
  setWinOrLose,
  difficulty,
}) {
  useEffect(() => {
    checkWin();
  }, [clicked]);

  function checkWin() {
    if (clicked.length == difficulty) {
      console.log("You win!");
      setWinOrLose(true);
    }
  }
}
