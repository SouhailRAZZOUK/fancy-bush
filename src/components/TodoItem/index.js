import { useCallback, useEffect, useRef, useState } from "react";
import { TodoItemBlock } from "./styles";
import Hammer from "hammerjs";

const THRESHOLD = 200;

const TodoItem = ({ id, text, isDone, onItemDelete }) => {
  const itemRef = useRef(null);
  const [positionX, setPositionX] = useState(0);

  const handleItemDelete = useCallback(() => {
    onItemDelete(id);
  }, [id, onItemDelete]);

  const handleItemPan = useCallback((event) => {
    setPositionX(event?.deltaX);
  }, []);

  const handleItemPanEnd = useCallback((event) => {
    console.log("Pan End Event: ", event);
    setPositionX(0);
  }, []);

  useEffect(() => {
    const ht = new Hammer(itemRef.current, {});
    ht.on("pan", handleItemPan);
    ht.on("panend", handleItemPanEnd);
  }, [handleItemPan, handleItemPanEnd]);

  return (
    <TodoItemBlock key={id} ref={itemRef} postionX={positionX} isDone={isDone}>
      {text}
    </TodoItemBlock>
  );
};

export default TodoItem;
