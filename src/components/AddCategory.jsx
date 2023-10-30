import { useState } from "react";
import PropTypes from 'prop-types'

export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = inputValue.trim();

    if (trimmedInput.length <= 1) return;

    onNewCategory(trimmedInput);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}

