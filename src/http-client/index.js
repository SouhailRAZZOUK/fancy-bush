export const getTasks = async () => {
  return await fetch("https://7t6pqk.sse.codesandbox.io/tasks")
    .then((res) => res.json())
    .then(({ tasks }) => tasks);
};
