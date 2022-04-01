import { render } from "@testing-library/react";

import TodoList from "../";

const generateRandomDate = (start = new Date(), end = new Date()) => {
  if (!start || !end) return new Date();

  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
const TASKS_COUNT = 30;
const tasks = new Array(TASKS_COUNT)
  .fill({
    id: null,
    text: "Todo Item",
  })
  .map((item, index) => ({
    ...item,
    id: Math.random(),
    text: `${item.text} ${index + 1}`,
    createdAt: generateRandomDate(new Date(2022, 2, 1)),
    isDone: Math.random() * 10 > 5,
  }));

test("Todolist with many items", () => {
  const onItemDelete = jest.fn();
  const label = "Pending Items";

  const { container } = render(
    <TodoList items={tasks} onItemDelete={onItemDelete} label={label} />
  );

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const listItemsElements = container.querySelectorAll("li");
  expect(listItemsElements.length).toBe(TASKS_COUNT);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const labelElement = container.querySelector("h3");
  expect(labelElement.textContent).toBe(`${label} (${TASKS_COUNT})`);

  //   expect(container).toBeFalsy()

  expect(container.innerHTML).toMatchSnapshot();
});

test("Todolist with no items", () => {
  const onItemDelete = jest.fn();

  const { container } = render(<TodoList onItemDelete={onItemDelete} />);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const listItemsElements = container.querySelectorAll("li");
  expect(listItemsElements.length).toBe(0);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const labelElement = container.querySelector("p");
  expect(labelElement.textContent).toBe("No Items");

  expect(container.innerHTML).toMatchSnapshot();
});
