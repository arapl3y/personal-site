import { ReactNode } from "react";

export default function Chip({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-full border bg-black px-4 py-1 text-sm text-white dark:bg-white dark:text-black">
      {children}
    </div>
  );
}
