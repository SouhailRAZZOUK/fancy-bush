import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoItem, getTodoItems } from "../../redux/actions";
import { selectAllToDoItems } from "../../redux/selectors";
import TodoItem from "../TodoItem";
import { TodoListBlock } from "./styles";

const TodoList = ({ label }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllToDoItems);
  const handleItemDelete = useCallback((targetId) => {
    dispatch(deleteTodoItem(targetId));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTodoItems());
  }, []);

  if (!items || items.length < 1) return <p>No Items</p>;

  return (
    <div>
      <h3>
        {label} ({items?.length})
      </h3>
      <TodoListBlock>
        {items?.map((item) => (
          <TodoItem key={item?.id} {...item} onItemDelete={handleItemDelete} />
        ))}
      </TodoListBlock>
    </div>
  );
};

export default TodoList;
