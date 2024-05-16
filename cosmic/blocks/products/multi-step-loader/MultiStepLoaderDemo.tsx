"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./MultiStepLoader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { Button } from "@/cosmic/elements/Button"

const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="mb-8">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <Button
        type="submit"
        onClick={() => setLoading(true)}
        // className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        // style={{
        //   boxShadow:
        //     "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        // }}
      >
        Docs Required
      </Button>

      {loading && (
        <button
          className="fixed bottom-4 right-1/2 text-black dark:text-white z-[120]"
          // className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-black dark:text-white z-120"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
