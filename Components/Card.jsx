"use client";

import useTheme from "@/Hooks/UseTheme";
import Image from "next/image";
import { useState, useMemo } from "react";

const MAX_DESC_WORDS = 12;

const Card = ({ desc, title, src, active: initialActive }) => {
  const { darkMode } = useTheme();
  const [active, setActive] = useState(initialActive);

  const theme = useMemo(() => {
    return darkMode
      ? {
          backgroundCard: "hsl(200, 60%, 99%)",
          borderCard: "border-gray-100",
          borderBtn: "border-gray-500",
          bgBtn: active ? "hsl(3, 77%, 44%)" : "hsl(0, 0%, 78%)",
          textBtn: "hsl(227, 75%, 14%)",
          titleColor: "hsl(227, 75%, 14%)",
          textColor: "hsl(225, 23%, 24%)",
          toggleKnob: "bg-white",
        }
      : {
          backgroundCard: "hsl(226, 25%, 17%)",
          borderCard: "border-gray-600",
          borderBtn: "border-gray-400",
          bgBtn: active ? "hsl(3, 86%, 64%)" : "hsl(226, 11%, 37%)",
          textBtn: "hsl(217, 61%, 90%)",
          titleColor: "#fff",
          textColor: "hsl(217, 61%, 90%)",
          toggleKnob: "bg-white",
        };
  }, [darkMode, active]);

  const truncatedDesc = useMemo(
    () =>
      desc.split(" ").slice(0, MAX_DESC_WORDS).join(" ") +
      (desc.split(" ").length > MAX_DESC_WORDS ? "..." : ""),
    [desc]
  );

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      className={`p-3 rounded-xl w-full border ${theme.borderCard} h-full min-h-[170px] flex flex-col justify-between transition-colors duration-300`}
      style={{
        background: theme.backgroundCard,
      }}
    >
      <div className="w-full flex flex-row items-start gap-3">
        <Image
          src={src}
          alt={title}
          width={40}
          height={40}
          className="object-contain mt-1"
          priority={false}
        />
        <div className="flex-1">
          <h2
            className="font-bold mb-1 text-lg line-clamp-1"
            style={{ color: theme.titleColor }}
          >
            {title}
          </h2>
          <p
            className="text-sm line-clamp-3"
            style={{ color: theme.textColor }}
          >
            {truncatedDesc}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-between items-center">
        <button
          className={`rounded-full border ${theme.borderBtn} py-1 px-3 font-semibold cursor-pointer remove-btn text-sm transition-colors duration-300`}
          aria-label="Remove item"
          style={{ color: theme.textBtn }}
        >
          Remove
        </button>
        <button
          role="switch"
          aria-checked={active}
          className={`h-5 rounded-full relative ${
            active ? "active-click" : "inactive-click"
          } transition-colors duration-300 cursor-pointer focus:outline-none w-10`}
          style={{ background: theme.bgBtn }}
          onClick={handleClick}
          aria-label={`Toggle ${title}, currently ${
            active ? "active" : "inactive"
          }`}
          type="button"
        >
          <span
            className={`block w-4 h-4 rounded-full ${
              theme.toggleKnob
            } absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 shadow-sm ${
              active ? "translate-x-5.5" : "translate-x-0.5"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Card;
