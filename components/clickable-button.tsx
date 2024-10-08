import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function ClickableButton({ text, onClick }: ButtonProps) {
  return (
    <button
      className="shadow-[0_3px_10px_0px_rgba(24,59,86,0.15)]
      bg-[#fff] p-2 w-fit rounded-full text-sm m-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
