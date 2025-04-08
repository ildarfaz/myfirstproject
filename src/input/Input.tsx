import { FC } from 'react';

import style from './styles.module.scss';
type TInput = {
  onChange(value: string): void;
}

export const Input: FC<TInput> = ({ onChange }) => {
  return (
    <div className={style.input}>
      <input
        type="search"
        placeholder="Search for a contact"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
