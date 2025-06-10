"use client";

import useTheme from "../Hooks/useTheme";

export const FilterButton = ({ active, label, currentFilter, onClick }) => {
  const { darkMode } = useTheme();
  const isActive = currentFilter === active;

  const themeStyles = {
    dark: {
      activeBg: "hsl(3, 77%, 44%)",
      activeText: "#fff",
      inactiveBg: "hsl(200, 60%, 99%)",
      inactiveText: "hsl(227, 75%, 14%)",
      hoverOpacity: 0.9,
    },
    light: {
      activeBg: "hsl(3, 86%, 64%)",
      activeText: "hsl(227, 75%, 14%)",
      inactiveBg: "hsl(225, 23%, 24%)",
      inactiveText: "#fff",
      hoverOpacity: 0.9,
    },
  };

  const currentTheme = darkMode ? themeStyles.dark : themeStyles.light;

  return (
    <button
      className={`py-1 px-3 sm:px-4 rounded-full ${
        isActive ? "active-list" : "inactive-list"
      } hover:opacity-90  transition-opacity text-sm sm:text-base cursor-pointer`}
      onClick={() => onClick(active)}
      aria-label={`${label} extensions ${
        isActive ? "(currently selected)" : ""
      }`}
      style={{
        background: isActive ? currentTheme.activeBg : currentTheme.inactiveBg,
        color: isActive ? currentTheme.activeText : currentTheme.inactiveText,
      }}
    >
      {label}
    </button>
  );
};

export default FilterButton;
