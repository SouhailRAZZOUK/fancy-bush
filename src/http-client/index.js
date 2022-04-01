export const getTasks = async () => {
  return await fetch("http://localhost:4001/tasks")
    .then((res) => res.json())
    .then(({ tasks }) => tasks);
};