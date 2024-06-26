"use client";
import { Button } from "@/components/ui/button";
import { Sign } from "@/components/ui/sign";
import _ from "lodash";
import useGameLogic from "@/hook/useLogicalGame";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function Home() {
  const {
    score,
    userPick,
    userHasPick,
    housePick,
    result,
    playGame,
    resetGame,
  } = useGameLogic();

  return (
    <main className="bg-gradient-radial from-radial-from to-radial-to">
      <div className="container min-h-screen flex flex-col items-center justify-between py-8 lg:max-w-xl">
        {/* Header */}
        <div className="border-header-outline border-2 rounded-lg p-3 flex justify-between items-center w-full">
          <h1 className="ml-4 uppercase text-white text-lg leading-4 tracking-wider">
            Rock <br />
            Paper <br />
            Scissors
          </h1>
          <div className="bg-white rounded-md flex flex-col items-center aspect-video leading-none py-2 px-6">
            <span className="text-score-text uppercase text-[10px] tracking-wider">
              score
            </span>
            <span className="text-dark-text font-bold text-4xl">{score}</span>
          </div>
        </div>
        {/* BoardGame Triangle */}
        <div className="relative w-1/2 lg:grow lg:flex lg:items-center">
          <div className="relative w-full aspect-triangle ">
            <div
              className={` bg-no-repeat bg-center bg-contain aspect-triangle transition-opacity ${
                userHasPick ? "bg-none" : "bg-triangle"
              }`}
            ></div>

            <Sign
              variant="paper"
              onClick={() => playGame("paper")}
              className={`absolute ${
                userPick === "paper"
                  ? `top-0 left-0 -translate-x-1/2 -translate-y-1/2`
                  : userHasPick
                  ? "hidden"
                  : "transition-none opacity-100 top-0 left-0 -translate-x-1/2 -translate-y-1/2"
              }`}
            ></Sign>
            <Sign
              variant="scissors"
              onClick={() => playGame("scissors")}
              className={`absolute ${
                userPick === "scissors"
                  ? `top-0 left-0 -translate-x-1/2 -translate-y-1/2`
                  : userHasPick
                  ? "hidden"
                  : "transition-none opacity-100 top-0 right-0 translate-x-1/2 -translate-y-1/2"
              }`}
            ></Sign>
            <Sign
              variant="rock"
              onClick={() => playGame("rock")}
              className={`absolute ${
                userPick === "rock"
                  ? `top-0 left-0 -translate-x-1/2 -translate-y-1/2 `
                  : userHasPick
                  ? "hidden"
                  : "transition-none opacity-100 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
              }`}
            ></Sign>

            <div
              className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-sign-user transition-opacity delay-1000 duration-500 opacity-0 ${
                userHasPick ? "opacity-100 z-20" : "opacity-0 -z-10"
              }`}
            >
              <Sign
                variant={userPick}
                className={`${result ? "shadow-selected" : ""}`}
              ></Sign>
              <p className={`uppercase text-accent text-sm text-center mt-2`}>
                You picked
              </p>
            </div>

            <div
              className={`absolute top-0 right-0 translate-x-1/2 -translate-y-sign-user transition-opacity delay-1500 duration-500 opacity-0 ${
                userHasPick ? "opacity-100 z-20" : "opacity-0 -z-10"
              }`}
            >
              <Sign variant={housePick} className="duration-100"></Sign>
              <p className={`uppercase text-accent text-sm text-center mt-2`}>
                The house picked
              </p>
            </div>
          </div>
        </div>
        {result && (
          <div className="absolute top-1/2 translate-y-1/2">
            <p className="uppercase text-[60px] text-accent mb-2">
              {result === "win" && "You win"}
              {result === "lose" && "You lose"}
              {result === "draw" && "It's a draw"}
            </p>
            <Button
              variant="secondary"
              className="h-auto uppercase w-full text-lg text-header-outline py-2"
              onClick={() => {
                resetGame();
              }}
            >
              Play again
            </Button>
          </div>
        )}

        {/* CTA */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="px-8 py-1 uppercase opacity-75 lg:fixed lg:bottom-8 lg:right-8"
            >
              Rules
            </Button>
          </DialogTrigger>
          <DialogContent className="p-6 w-screen h-screen lg:max-w-md lg:max-h-[50%]">
            <div className="flex flex-col items-center justify-evenly">
              <h1 className="uppercase text-dark-text text-[40px] lg:text-left lg:w-full">
                rules
              </h1>
              <div className="relative w-full aspect-rules lg:max-w-72">
                <Image
                  src="/images/image-rules.svg"
                  alt="rules of game"
                  fill={true}
                  sizes="calc(100% - 3rem)"
                  className="object-contain"
                ></Image>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="absolute bottom-0 text-header-outline text-[10px]">
          Challenge by{" "}
          <a
            className="text-white font-semibold"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="text-white font-semibold"
            href="https://www.linkedin.com/in/thibaut-edenwald/"
            target="_blank"
          >
            Edenwald Thibaut
          </a>
          .
        </div>
      </div>
    </main>
  );
}
