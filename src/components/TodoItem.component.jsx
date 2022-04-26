import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <React.Fragment>
      <div>
        <input type="checkbox" />
        {todo}
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
