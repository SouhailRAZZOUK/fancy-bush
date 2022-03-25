import "./styles.css";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [itemsList, setItemsList] = useState([]);
  const [doneItemsList, setDoneItemsList] = useState([]);
  const [pendingItemsList, setPendingItemsList] = useState([]);
  const handleAddItem = useCallback(
    (nextItem) => {
      const newListItems = [nextItem, ...itemsList];
      setItemsList(newListItems);
    },
    [itemsList]
  );
  const handleItemDelete = useCallback(
    (targetId) => {
      const newItems = itemsList.filter(({ id }) => id !== targetId);
      setItemsList(newItems);
    },
    [itemsList]
  );

  useEffect(() => {
    const getTasks = async () => {
      return await fetch("https://7t6pqk.sse.codesandbox.io/tasks")
        .then((res) => res.json())
        .then(({ tasks }) => tasks);
    };

    getTasks().then(setItemsList);
  }, []);

  useEffect(() => {
    let dItems = [];
    let pItems = [];
    itemsList.forEach((item) => {
      if (item.isDone) {
        dItems = [...dItems, item];
        return;
      }

      pItems = [...pItems, item];
    });
    setDoneItemsList(dItems);
    setPendingItemsList(pItems);
  }, [itemsList]);

  return (
    <div className="App">
      <TodoAdd onAddItem={handleAddItem} />
      <TodoList
        onItemDelete={handleItemDelete}
        label="Pending"
        items={pendingItemsList}
      />
      <TodoList
        onItemDelete={handleItemDelete}
        label="Done"
        items={doneItemsList}
      />
    </div>
  );
}
