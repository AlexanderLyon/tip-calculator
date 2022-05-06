import React, { useEffect, useState } from 'react';

interface IInput {
  type: 'text' | 'number';
  isCurrency?: boolean;
  placeholder?: string;
  defaultValue?: string | number;
  icon?: string;
  onChange?: (val?: string | number) => any;
}

export const Input: React.FC<IInput> = ({ type, isCurrency, placeholder, defaultValue, icon, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  return (
    <span className="a-input">
      {icon ? <img className="a-input--icon" src={icon} alt="icon" /> : null}
      <input
        type={type}
        value={value}
        min={type === 'number' ? 0 : ''}
        placeholder={placeholder}
        onClick={(e) => {
          e.currentTarget.select();
        }}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          if (isCurrency) {
            setValue(Number(e.target.value).toFixed(2));
          }
        }}
      />
    </span>
  );
};
