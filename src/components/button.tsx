import React from 'react';

interface IButtonProps {
  children: any;
  value?: string | number;
  selected?: boolean;
  primary?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({ children, value, selected, primary, onClick }) => {
  const buttonClasses = (): string => {
    const classList: string[] = ['a-btn'];

    if (primary) {
      classList.push('a-btn--primary');
    }

    if (selected) {
      classList.push('a-btn--selected');
    }

    return classList.join(' ');
  };

  return (
    <button className={buttonClasses()} value={value} onClick={onClick}>
      {children}
    </button>
  );
};
