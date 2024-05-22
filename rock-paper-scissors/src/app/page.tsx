"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gradient-radial from-radial-from to-radial-to">
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
      <div className="relative bg-triangle bg-no-repeat bg-center bg-contain w-1/2 aspect-triangle ">
        <button className="rounded-full border-[16px] bg-white border-paper-from w-[120px] h-[120px] grid place-content-center shadow-game-btn absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/icon-paper.svg"
            alt="Paper"
            width={40}
            height={40}
          />
        </button>
        <button className="rounded-full border-[16px] bg-white border-scissor-from w-[120px] h-[120px] grid place-content-center shadow-game-btn absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/icon-scissors.svg"
            alt="Scissor"
            width={40}
            height={40}
          />
        </button>
        <button className="rounded-full border-[16px] bg-white border-rock-from w-[120px] h-[120px] grid place-content-center shadow-game-btn absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <Image
            src="/images/icon-rock.svg"
            alt="Rock"
            width={40}
            height={40}
          />
        </button>
      </div>

      {/* CTA */}
      <button className="border-white border rounded-lg py-1 px-8 uppercase text-white font-light text-base opacity-80">
        Rules
      </button>
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
    </main>
  );
}
