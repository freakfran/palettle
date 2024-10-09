import React from "react";

type ButtonProps = {
  text: string;
  classname: string;
  onClick?: () => void;
};

export default function ClickableButton({ text, onClick, classname }: ButtonProps) {
  return (
    <button
      className={classname}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
