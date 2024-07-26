import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import styles from "./BackgroundSparkle.module.css";

type Props = {
  className?: string;
  children: ReactNode;
};

function getRandomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function BackgroundSparkle({ className, children }: Props) {
  return (
    <div className={cn("relative h-full w-full", className)}>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          style={{
            top: `${getRandomNumberBetween(10, 80)}%`,
          }}
          className={cn("absolute h-full w-full", styles.sparkle)}
        ></div>
      ))}
      {children}
    </div>
  );
}
