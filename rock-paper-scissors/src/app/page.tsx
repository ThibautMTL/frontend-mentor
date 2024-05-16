import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gradient-radial from-radial-from to-radial-to">
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
          <span className="text-dark-text font-bold text-4xl">12</span>
        </div>
      </div>
    </main>
  );
}
