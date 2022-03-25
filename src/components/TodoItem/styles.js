import styled from "styled-components";

export const TodoItemBlock = styled.li(
  {
    padding: 10,
    margin: 5,
    boxSizing: "border-box",
    border: "1px solid black",
    borderRadius: 4,
    fontSize: "bold",
    position: "relative"
  },
  ({ isDone, postionX }) => ({
    backgroundColor: isDone ? "red" : "gray",
    left: postionX
  })
);

// export const TodoItemDeleteButton = styled.button({

// })
