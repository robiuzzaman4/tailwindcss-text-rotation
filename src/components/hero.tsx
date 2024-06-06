import React from "react";
import { Button } from "./ui/button";
import { StarFilledIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-8 w-full py-32">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center tracking-tighter font-semibold">
          Tailwind CSS Text Rotation
        </h1>
        <p className="text-sm md:text-base text-center text-muted-foreground md:px-12">
          Discover unique text rotation techniques in Tailwind CSS with custom CSS
          writing modes for stunning designs.
        </p>
        <Button
          variant="outline"
          className="w-fit mx-auto flex items-center justify-center gap-1"
        >
          <StarFilledIcon className="text-orange-500" />
          <span>Start on Github</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
