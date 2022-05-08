import React, { ReactElement } from 'react';

interface IButtonGroup {
  children: ReactElement[];
  value: string | number;
  onChange: (selectedValue: any) => any;
}

export const ButtonGroup: React.FC<IButtonGroup> = ({ children, value, onChange }) => (
  <div className="button-group">
    {children.map((child: ReactElement, i: number) =>
      React.cloneElement(child, {
        key: i,
        selected: value === child.props.value,
        onClick: (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
      })
    )}
  </div>
);
