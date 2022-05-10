import React from 'react';

interface IInput {
  type: 'text' | 'number';
  value: string | number;
  selected?: boolean;
  minimum?: number;
  placeholder?: string;
  inputMode?: 'decimal' | 'numeric' | 'text';
  icon?: string;
  errorMessage?: string | null;
  onChange: (val: string) => any;
  onBlur?: (val?: string | number) => any;
}

export const Input: React.FC<IInput> = ({
  type,
  value,
  selected,
  minimum,
  placeholder,
  inputMode,
  icon,
  errorMessage,
  onChange,
  onBlur,
}) => {
  const inputClasses = (): string => {
    const classList: string[] = ['a-input'];

    if (selected) {
      classList.push('a-input--selected');
    }

    if (errorMessage) {
      classList.push('a-input--error');
    }

    return classList.join(' ');
  };

  return (
    <span className={inputClasses()}>
      {icon ? <img className="a-input--icon" src={icon} alt="icon" /> : null}
      {errorMessage ? <span className="a-input--error-message">{errorMessage}</span> : null}
      <input
        type={type}
        value={value}
        min={minimum}
        inputMode={inputMode || 'text'}
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
