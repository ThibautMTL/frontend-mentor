import { SignType, UserChoice } from "@/app/type/global";
import _ from "lodash";
import { useState } from "react";

const useGameLogic = () => {
  const [score, setScore] = useState(0);
  const [userPick, setUserPick] = useState<UserChoice>(undefined);
  const [userHasPick, setUserHasPick] = useState<boolean>(false);
  const [housePick, setHousePick] = useState<UserChoice>(undefined);
  const [result, setResult] = useState<"win" | "lose" | "draw" | undefined>(
    undefined
  );

  const getHousePick = (callback: (housePick: SignType) => void) => {
    const items: Array<SignType> = ["rock", "paper", "scissors"];
    let index = 0;
    const intervalId = setInterval(() => {
      setHousePick(items[index]);
      index = (index + 1) % items.length; // Loop through the array
    }, 200); // Change item every 200 milliseconds
    setTimeout(() => {
      clearInterval(intervalId); // Stop changing after 2 seconds
      const finalPick = items[Math.floor(Math.random() * items.length)]; // Pick a random item
      setHousePick(finalPick);
      callback(finalPick);
    }, 2000); // Stop after 2 seconds
  };

  const playGame = (userSign: UserChoice) => {
    setUserPick(userSign);
    setUserHasPick(true);
    _.delay(() => {
      getHousePick((housePick) => {
        _.delay(() => {
          determineWinner(userSign, housePick);
        }, 500);
      });
    }, 1500);
  };

  const resetGame = () => {
    setUserPick(undefined);
    setUserHasPick(false);
    setHousePick(undefined);
    setResult(undefined);
  };

  const determineWinner = (userSign: UserChoice, houseSign: UserChoice) => {
    if (userSign === houseSign) {
      setResult("draw");
    } else if (
      (userSign === "rock" && houseSign === "scissors") ||
      (userSign === "paper" && houseSign === "rock") ||
      (userSign === "scissors" && houseSign === "paper")
    ) {
      setScore(score + 1);
      setResult("win");
    } else {
      setResult("lose");
    }
  };

  return {
    score,
    userPick,
    userHasPick,
    housePick,
    result,
    playGame,
    resetGame,
  };
};

export default useGameLogic;
