"use client";
import { ThemeContext } from "@/Context/theme-context";
import { useContext } from "react";

export default function useTheme() {
  return useContext(ThemeContext);
}
