import React, { FC, useRef } from "react";

interface TodoInputProps {
  onSubmit: (todo: string) => void;
}

export const TodoInput: FC<TodoInputProps> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickButton = () => {
    if (!inputRef.current?.value) return;

    onSubmit(inputRef.current?.value);
    inputRef.current.value = "";
  };

  return (
    <div className="todo-input-container">
      <div className="todo-input-box">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              handleClickButton();
            }
          }}
          ref={inputRef}
        />
      </div>

      <button
        className="todo-add-btn"
        type="button"
        onClick={handleClickButton}
      >
        +
      </button>
    </div>
  );
};
