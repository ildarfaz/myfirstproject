import React, { FC } from "react";
interface IProps {
  title: string[];
  onChange(value: string): void;
}
export const Select: FC<IProps> = (props) => {
  return (
    <select onChange={(event) => props.onChange(event.target.value)}>
      <option value="">All</option>
      {props.title &&
        props.title.map((name: string) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      ;
    </select>
  );
};
