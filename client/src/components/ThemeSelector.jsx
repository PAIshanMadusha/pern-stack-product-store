import { PaletteIcon } from "lucide-react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

function ThemeSelector() {
  // Access the theme and setTheme function from the theme store
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="dropdown dropdown-end">
      {/* Dropdown menu for theme selection */}
      <button tabIndex={0} className="btn btn-ghost btn-circle">
        <PaletteIcon className="size-5" />
      </button>
      <div
        tabIndex={0}
        className="dropdown-content bt-2 p-2 shadow-2xl bg-base-200 backdrop-blur-lg rounded-xl w-52 border border-base-content/10"
        style={{ maxHeight: "420px", overflowY: "auto" }}
      >
        {THEMES.map((themeOption) => (
          <button
            key={themeOption.name}
            className={`
                        w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${
                          theme === themeOption.name
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-base-content/5"
                        }
                        `}
            onClick={() => setTheme(themeOption.name)}
          >
            <PaletteIcon className="size-4" />
            <span className="text-sm font-medium">{themeOption.label}</span>

            {/* Theme Preview Colors */}
            <div className="ml-auto flex gap-1">
              {themeOption.colors.map((color, i) => (
                <span
                  key={i}
                  className="size-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
