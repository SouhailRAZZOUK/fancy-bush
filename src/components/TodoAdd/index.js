import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../../redux/actions";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleItemAdd = useCallback(() => {
    const newItem = {
      text: inputValue,
      id: Math.random(),
      isDone: false,
      createdAt: new Date(),
    };

    dispatch(addTodoItem(newItem));
  }, [dispatch, inputValue]);

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
