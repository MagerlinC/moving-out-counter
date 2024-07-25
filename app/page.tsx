import Image from "next/image";
import { Countdown } from "./countdown";

export default function Home() {
  const frikkeDepnerTargetDate = new Date("2024-09-01T00:00:00Z");
  const mikkelTargetDate = new Date("2024-10-01T00:00:00Z");

  const imageScaling = 0.8;

  return (
    <main className="flex min-h-screen flex-col content-center items-center gap-4 p-4">
      <h1 className="header whitespace-nowrap">
        {"✨ It's honkin' time in... ✨"}
      </h1>
      <div className={"grid grid-cols-2 items-center gap-8"}>
        <Image
          src="/goose house.png"
          alt="goose"
          width={300 * imageScaling}
          height={24 * imageScaling}
          priority
        />
        <Countdown
          title="🏠 Casa Frikke-Depner"
          targetDate={frikkeDepnerTargetDate}
        />

        <Image
          src="/goose tower.png"
          alt="goose"
          width={250 * imageScaling}
          height={24 * imageScaling}
          priority
        />
        <Countdown title="🏠 Casa Agerlin" targetDate={mikkelTargetDate} />
      </div>
    </main>
  );
}
