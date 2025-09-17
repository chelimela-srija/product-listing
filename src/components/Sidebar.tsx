"use client";
import { useState } from "react";

type SidebarProps = {
  onFilter: (filter: { category?: string; color?: string }) => void;
};

export default function Sidebar({ onFilter }: SidebarProps) {
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [colorsOpen, setColorsOpen] = useState(true);

  const categories = ["Shoes", "Accessories", "Clothing", "Bags", "Electronics"];
  const colors = ["Red", "Blue", "Black", "White"];

  return (
    <aside className="w-64 bg-gray-100 p-6 border-r hidden md:block">
      {/* Categories */}
      <h2
        className="text-lg font-semibold mb-2 cursor-pointer"
        onClick={() => setCategoriesOpen(!categoriesOpen)}
        aria-expanded={categoriesOpen}
      >
        Categories
      </h2>
      {categoriesOpen && (
        <ul className="space-y-2 mb-6">
          {categories.map((c) => (
            <li
              key={c}
              className="cursor-pointer hover:text-blue-600"
              onClick={() => onFilter({ category: c })}
            >
              {c}
            </li>
          ))}
        </ul>
      )}

      {/* Colors */}
      <h2
        className="text-lg font-semibold mb-2 cursor-pointer"
        onClick={() => setColorsOpen(!colorsOpen)}
        aria-expanded={colorsOpen}
      >
        Colors
      </h2>
      {colorsOpen && (
        <ul className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onFilter({ color })}
              className={`w-6 h-6 rounded-full border`}
              style={{ backgroundColor: color.toLowerCase() }}
              aria-label={`Filter by ${color}`}
            />
          ))}
        </ul>
      )}
    </aside>
  );
}



