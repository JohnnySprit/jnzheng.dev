import { PHOTOS } from "@/data/photos";

export function PhotoRail() {
  if (PHOTOS.length === 0) return null;

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
        {[...PHOTOS].map((shot, i) => (
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
