import Image from "next/image";
import { Countdown } from "./countdown";

export default function Home() {
  const frikkeDepnerTargetDate = new Date("2024-09-01T00:00:00Z");
  const mikkelTargetDate = new Date("2024-10-01T00:00:00Z");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
      <h1 className="header">{"✨ It's honkin' time in... ✨"}</h1>
      <div className={"flex gap-4 items-center justify-center"}>
        <Image
          src="/goose house.png"
          alt="goose"
          width={300}
          height={24}
          priority
        />
        <Countdown
          title="Casa FrikkeDepner"
          targetDate={frikkeDepnerTargetDate}
        />
      </div>
      <div className={"flex gap-4 items-center justify-center"}>
        <Image
          src="/goose tower.png"
          alt="goose"
          width={250}
          height={24}
          priority
        />
        <Countdown title="Casa Agerlin" targetDate={mikkelTargetDate} />
      </div>
    </main>
  );
}
