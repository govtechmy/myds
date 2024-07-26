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
    <div className={cn("z-1 relative h-full w-full", className)}>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          style={{
            top: `${i % 2 === 0 ? getRandomNumberBetween(10, 50) : getRandomNumberBetween(50, 90)}%`,
          }}
          className={cn("absolute h-full w-full", styles.sparkle)}
        ></div>
      ))}
      {children}
    </div>
  );
}
