"use client";
import { useMemo, useState } from "react";
import Card from "@/Components/Card";
import data from "../data";
import FilterButton from "./FilterButton";
import useTheme from "../Hooks/useTheme";

const List = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { darkMode } = useTheme();


  const themeStyles = {
    dark: {
      headingColor: "hsl(227, 75%, 14%)",
      bgColor: "hsl(200, 60%, 99%)",
    },
    light: {
      headingColor: "#fff",
      bgColor: "hsl(226, 25%, 17%)",
    },
  };

  const filteredData = useMemo(() => {
    return data.filter((tool) => {
      if (activeFilter === "all") return true;
      return activeFilter === "active" ? tool.isActive : !tool.isActive;
    });
  }, [activeFilter]);

  return (
    <div 
      className="w-full flex flex-col space-y-6 pt-6 sm:pt-8 lg:pt-14 transition-colors duration-300"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between w-full gap-4 sm:gap-0">
        <h1
          className="text-2xl sm:text-3xl font-bold transition-colors duration-300"
          style={{ color: darkMode ? themeStyles.dark.headingColor : themeStyles.light.headingColor }}
        >
          Extensions List
        </h1>
        <div className="flex flex-row items-center gap-2 sm:gap-4 flex-wrap">
          <FilterButton
            active="all"
            label="All"
            currentFilter={activeFilter}
            onClick={setActiveFilter}
          />
          <FilterButton
            active="active"
            label="Active"
            currentFilter={activeFilter}
            onClick={setActiveFilter}
          />
          <FilterButton
            active="inactive"
            label="Inactive"
            currentFilter={activeFilter}
            onClick={setActiveFilter}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData?.map((item) => (
          <Card
            title={item.name}
            desc={item.description}
            src={item.logo}
            active={item.isActive}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default List;