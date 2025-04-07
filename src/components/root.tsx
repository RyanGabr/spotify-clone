import { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <div
      className="
  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-2 rounded-xl
  bg-black border border-zinc-700 shadow-black shadow-2xl w-10/12
  space-y-2
  "
    >
      {children}
    </div>
  );
}
