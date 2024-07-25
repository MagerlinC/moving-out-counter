"use client";
import { useEffect, useState } from "react";

const diffInSeconds = (dt2: Date, dt1: Date) => {
  // Calculate the difference in milliseconds between the two provided dates and convert it to seconds
  const diff = (dt2.getTime() - dt1.getTime()) / 1000;

  // Return the absolute value of the rounded difference in minutes
  return Math.abs(Math.round(diff));
};

const prettyFill = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

type CountdownProps = {
  targetDate: Date;
  title: string;
};

export const Countdown: React.FC<CountdownProps> = ({ targetDate, title }) => {
  const [now, setNow] = useState(new Date());

  let remainder = 0;
  const difference = diffInSeconds(targetDate, now);
  const days = Math.floor(difference / (60 * 60 * 24));
  remainder = difference % (60 * 60 * 24);
  const hours = Math.floor(remainder / (60 * 60));
  remainder = remainder % (60 * 60);
  const minutes = Math.floor(remainder / 60);
  remainder = remainder % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="header font-bold">{title}</h2>
      <div key={now.toLocaleDateString()} className={"grid grid-cols-4 gap-4"}>
        <p className="number-tile">{prettyFill(days)}</p>
        <p className="number-tile">{prettyFill(hours)}</p>
        <p className="number-tile">{prettyFill(minutes)}</p>
        <p className="number-tile">{prettyFill(remainder)}</p>
        <p className="text-center">Days</p>
        <p className="text-center">Hours</p>
        <p className="text-center">Minutes</p>
        <p className="text-center">Seconds</p>
      </div>
    </div>
  );
};
