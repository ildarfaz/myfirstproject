import React, { FC } from "react";
interface IProps {
  onChange(value: string): void;
}
export const Input: FC<IProps> = (props) => {
  return (
    <div className="header_input">
      <input
        type="text"
        placeholder="Search for a contact"
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
};
