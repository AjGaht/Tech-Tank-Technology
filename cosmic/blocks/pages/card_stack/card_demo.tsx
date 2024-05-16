"use client";
import { CardStack } from "./card-stack";
import { cn } from "@/cosmic/utils";
export function CardStackDemo() {
  return (
    <div className="h-[20rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    // name: "Manu Arora",
    // designation: "Senior Software Engineer",
    content: (
        <img
        src={"https://imgix.cosmicjs.com/9253ada0-112e-11ef-b837-75832108e4e1-E.png?w=1600&auto=format,compression?w=1600&auto=format,compression"}
        alt='t3'
        
        // className="w-full dark:hidden"
      />
    ),
  },
  {
    id: 1,
    // name: "Elon Musk",
    // designation: "Senior Shitposter",
    content: (
        <img
        src={"https://imgix.cosmicjs.com/0faf1480-9b08-11ee-b62d-5b90a0a1bade-BusinessExtreme.png?w=1600&auto=format,compression?w=1600&auto=format,compression"}
        alt='t3'
        // className="w-full dark:hidden"
      />
    ),
  },
  {
    id: 2,
    // name: "Tyler Durden",
    // designation: "Manager Project Mayhem",
    content: (
        <img
        src={`https://imgix.cosmicjs.com/caa4c1e0-ab07-11ee-abb7-b12cd01235f5-future.png?w=1600&auto=format,compression?w=1600&auto=format,compression`}
        alt='t3'
        // className="w-full dark:hidden"
      />
    ),
  },
];
