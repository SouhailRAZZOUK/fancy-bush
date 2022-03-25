import TodoItem from "../TodoItem";
import { TodoListBlock } from "./styles";

const TodoList = ({ onItemDelete, items, label }) => {
  if (!items || items.length < 1) return <p>No Items</p>;

  return (
    <div>
      <h3>
        {label} ({items?.length})
      </h3>
      <TodoListBlock>
        {items?.map((item) => (
          <TodoItem {...item} onItemDelete={onItemDelete} />
        ))}
      </TodoListBlock>
    </div>
  );
};

export default TodoList;
