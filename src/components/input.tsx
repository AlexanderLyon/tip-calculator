import React from 'react';

interface IInput {
  type: string;
  placeholder?: string;
  icon?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInput> = ({ type, placeholder, icon, onChange }) => {
  return (
    <span className="a-input">
      {icon ? <img className="a-input--icon" src={icon} alt="icon" /> : null}
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </span>
  );
};
