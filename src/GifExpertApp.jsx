import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const handleRemoveCategory = (category) => {
    const newCategories = [...categories];
    const index = newCategories.findIndex((element) => element === category);
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={handleAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} onDelete={handleRemoveCategory} />
      ))}
    </>
  );
}
