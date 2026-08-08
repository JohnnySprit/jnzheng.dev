"use client";

import { useEffect, useState } from "react";
import { PHOTOS } from "@/data/photos";

function rotateFromRandomStart<T>(items: T[]): T[] {
  if (items.length <= 1) return items;
  const start = Math.floor(Math.random() * items.length);
  return [...items.slice(start), ...items.slice(0, start)];
}

export function PhotoRail() {
  const [shots, setShots] = useState(PHOTOS);

  useEffect(() => {
    setShots(rotateFromRandomStart(PHOTOS));
  }, []);

  if (shots.length === 0) return null;

  const loop = [...shots, ...shots];

  return (
    <aside
      className="hidden md:block sticky top-12 h-[calc(100vh-6rem)] self-start overflow-hidden"
      aria-hidden
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="photo-rail-track flex flex-col gap-3">
        {loop.map((shot, i) => (
          <img
            key={`${shot.src}-${i}`}
            src={shot.src}
            alt=""
            className="w-full h-full shrink-0 object-cover bg-[var(--bg-secondary)]"
          />
        ))}
      </div>
    </aside>
  );
}
