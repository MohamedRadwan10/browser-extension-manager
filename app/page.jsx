"use client";
import Header from "@/Components/Header";
import List from "@/Components/List";
import useTheme from "../Hooks/useTheme";

const Page = () => {
  const { darkMode } = useTheme();
  return (
    <main
      className="flex flex-col items-center min-h-screen w-full py-4 px-4 sm:p-6  lg:py-10 lg:px-8"
      style={{
        background: darkMode
          ? "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)"
          : "linear-gradient(180deg, #040918 0%, #091540 100%)",
      }}
    >
      <div className="w-full max-w-7xl">
        <Header />
        <List />
      </div>
    </main>
  );
};

export default Page;
