import { Provider } from "react-redux";

import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

import "./styles.css";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoAdd />
        <TodoList label="All Items" />
      </div>
    </Provider>
  );
}
