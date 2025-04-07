import { ReactNode } from "react";

interface PlaylistProps {
  children: ReactNode;
}

export function Playlist({ children }: PlaylistProps) {
  return (
    <div className="flex gap-2 w-[1fr] bg-white/10 rounded-md overflow-hidden shadow-2xl">
      <div className="bg-red-500 min-w-16 min-h-16"></div>
      <div className="flex items-center justify-center text-sm font-medium text-zinc-50 p-1">
        {children}
      </div>
    </div>
  );
}
