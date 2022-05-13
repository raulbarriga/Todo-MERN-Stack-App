import React, { useState } from "react";

const Task = ({ todo, deleteTodo, updateTodo }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({
    todo: "",
    completed: false,
  });
  const { todo: name, completed, _id } = todo;

  const renderName = () => {
    const itemStyle = {
      textDecoration: completed ? "line-through" : "none",
      cursor: "pointer",
    };

    if (editing) {
      return (
        <form onSubmit={onSaveClick}>
          {/* <input
            type="checkbox"
            className="checkbox-btn"
            checked={completed ? "checked" : ""}
            value={completed}
            onChange={(e) => {
              // const toggleCheckbox =
              //   completed === false
              //     ? {
              //         completed: true,
              //       }
              //     : {
              //         completed: false,
              //       };
              // updateTodo(_id, toggleCheckbox);
              setUpdatedTodo({ ...updatedTodo, completed: e.target.value })
            }}
          /> */}
          <input
            type="text"
            defaultValue={name}
            onChange={(e) =>
              setUpdatedTodo({ ...updatedTodo, todo: e.target.value })
            }
          />
        </form>
      );
    }

    return (
      <span className="name-and-checkbox">
        <input
          type="checkbox"
          className="checkbox-btn"
          checked={completed ? "checked" : ""}
          onChange={() => {
            const toggleCheckbox =
              completed === false
                ? {
                    completed: true,
                  }
                : {
                    completed: false,
                  };
            updateTodo(_id, toggleCheckbox);
          }}
        />
        <span
          style={itemStyle}
          onClick={() => {
            const toggleCheckbox =
              completed === false
                ? {
                    completed: true,
                  }
                : {
                    completed: false,
                  };
            updateTodo(_id, toggleCheckbox);
          }}
        >
          {name}
        </span>
      </span>
    );
  };

  const renderBtns = () => {
    if (editing) {
      return (
        <span className="btns">
          <button className="edit-btn" onClick={onSaveClick}>
            Save
          </button>
          <button className="delete-btn" onClick={onCancelClick}>
            Cancel
          </button>
        </span>
      );
    }

    return (
      <span className="btns">
        <button className="edit-btn" onClick={onEditClick}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteTodo(_id)}>
          Delete
        </button>
      </span>
    );
  };

  const onEditClick = () => {
    setEditing(true);
  };

  const onSaveClick = (e) => {
    e.preventDefault();
    console.log(updatedTodo);
    updateTodo(_id, updatedTodo);
    setEditing(false);
  };

  const onCancelClick = () => {
    setEditing(false);
  };

  return (
    <div className="task">
      {renderName()}
      {renderBtns()}
    </div>
  );
};

export default Task;
