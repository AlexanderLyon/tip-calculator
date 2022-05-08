import React from 'react';

interface IInput {
  type: 'text' | 'number';
  value: string | number;
  minimum?: number;
  placeholder?: string;
  icon?: string;
  onChange: (val: string | number) => any;
  onBlur?: (val?: string | number) => any;
}

export const Input: React.FC<IInput> = ({ type, value, minimum, placeholder, icon, onChange, onBlur }) => (
  <span className="a-input">
    {icon ? <img className="a-input--icon" src={icon} alt="icon" /> : null}
    <input
      type={type}
      value={value}
      min={minimum}
      placeholder={placeholder}
      onClick={(e) => {
        e.currentTarget.select();
      }}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => {
        if (onBlur) {
          onBlur(e.target.value);
        }
      }}
    />
  </span>
);
