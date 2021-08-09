import React from "react";
interface IProps {
  onChange(value: string): void;
}
export const Input: React.FC<IProps> = ({ onChange }) => {
  return (
    <div className="header_input">
      <input
        type="text"
        placeholder="Search for a contact"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
