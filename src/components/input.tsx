import React from 'react';

interface IInput {
  type: 'text' | 'number';
  value: string | number;
  selected?: boolean;
  minimum?: number;
  placeholder?: string;
  icon?: string;
  onChange: (val: string) => any;
  onBlur?: (val?: string | number) => any;
}

export const Input: React.FC<IInput> = ({ type, value, selected, minimum, placeholder, icon, onChange, onBlur }) => {
  const inputClasses = (): string => {
    const classList: string[] = ['a-input'];

    if (selected) {
      classList.push('a-input--selected');
    }

    return classList.join(' ');
  };

  return (
    <span className={inputClasses()}>
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
};
