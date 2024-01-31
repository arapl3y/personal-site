import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-w-[2.5rem]">
      {mounted && (
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="uppercase"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      )}
    </div>
  );
};

export default ThemeSwitch;
