import React from "react";
import type { Metadata } from "next";
import { apples } from "./apple-data";

export const metadata: Metadata = {
  title: "Apples",
  description: "Apples",
};

export default function Apples() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Apples</h1>

      <div className="space-y-6">
        <p>Here is a nice new page all about apples. Apples are a bit dull, but Mary likes them. I have decided to dedicate this page to Mary. It is a very good page. It has links to wikipedia, too. </p>
      </div>
      
      <div className="space-y-6">
        {apples.map((apple, index) => (
          <a
            key={index}
            href={apple.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {apple.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {apple.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {apple.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
