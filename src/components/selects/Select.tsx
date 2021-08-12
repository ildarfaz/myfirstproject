import React, { FC } from "react";
interface IProps {
  options: string[];
  onChange(value: string): void;
}
export const Select: FC<IProps> = ({ options, onChange }) => {
  return (
    <select onChange={(event) => onChange(event.target.value)}>
      <option value="">All</option>
      {options &&
        options.map((name: string) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      ;
    </select>
  );
};
