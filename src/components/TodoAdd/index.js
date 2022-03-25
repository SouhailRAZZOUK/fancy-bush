import { useCallback, useState } from "react";

const TodoAdd = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleItemAdd = useCallback(() => {
    onAddItem({
      text: inputValue,
      id: Math.random(),
      isDone: false,
      createdAt: new Date()
    });
  }, [onAddItem, inputValue]);

  const handleInputChange = ({ target }) => {
    setInputValue(target?.value);
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleItemAdd}>add</button>
    </div>
  );
};

export default TodoAdd;
