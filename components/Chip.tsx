import { ReactNode } from "react";

export default function Chip({ children }: { children: ReactNode }) {
  return (
    <div className="bg-off-black dark:text-off-black text-off-white rounded border px-4 py-1 text-xs uppercase sm:text-sm dark:bg-white">
      {children}
    </div>
  );
}
