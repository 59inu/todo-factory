import React, { ButtonHTMLAttributes, FC } from "react";

export const AddBtn: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props}>추가</button>;
};
