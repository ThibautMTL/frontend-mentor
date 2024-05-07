import Card from "@/components/card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Card></Card>
      </main>
      <div className="text-xs text-center">
        Challenge by{" "}
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-link"
        >
          Frontend Mentor
        </Link>
        . Coded by{" "}
        <Link
          className="text-link"
          href="https://www.linkedin.com/in/thibaut-edenwald/"
          target="_blank"
        >
          Thibaut Edenwald
        </Link>
        .
      </div>
    </>
  );
}
