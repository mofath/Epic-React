import { useState } from "react";
import Board from "./Board";
import { useLocalStorage } from "./useLocalStorage";
import { calculateNextValue, calculateStatus, calculateWinner } from "./utils";

const initialSquares = Array(9).fill(null);

export default function Game() {
  const [current, setCurrent] = useLocalStorage("tic-tac-toe:step", 0);
  const [history, setHistory] = useLocalStorage("tic-tac-toe:history", [initialSquares]);

  const currentSquares = history[current]

  const winner = calculateWinner(currentSquares);
  const next = calculateNextValue(currentSquares);
  const status = calculateStatus(winner, currentSquares, next);

  function selectSquare(square) {
    if (winner || currentSquares[square]) return;

    const newHistory = history.slice(0, current + 1);
    const squaresCopy = [...currentSquares];
    squaresCopy[square] = next;


    setHistory([...newHistory, squaresCopy]);
    setCurrent(newHistory.length)
  }

  function restart() {
    setHistory([initialSquares]);
    setCurrent(0);
  }

  const goToHistory = (i) => {
    setCurrent(i);
  };

  const moves = history.map((_, i) => {
    const desc = i === 0 ? "Go to start" : `Go to move #${i}`;
    const isCurrentStep = i === current;

    return (
      <li key={i}>
        <button disabled={isCurrentStep} onClick={() => goToHistory(i)}>
          {desc} {isCurrentStep ? "(current)" : null}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onClick={selectSquare} />
        <button className="restart" onClick={restart}>
          restart
        </button>
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
