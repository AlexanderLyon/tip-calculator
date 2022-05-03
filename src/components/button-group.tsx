import React, { useState, useEffect, ReactElement } from 'react';

interface IButtonGroup {
  children: ReactElement[];
  onChange?: (selectedValue: any) => any;
}

export const ButtonGroup: React.FC<IButtonGroup> = ({ children, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    if (selectedValue && onChange) {
      onChange(selectedValue);
    }
  }, [selectedValue]);

  const renderChildButtons = () =>
    children.map((child: ReactElement, i: number) =>
      React.cloneElement(child, {
        key: i,
        selected: selectedValue === child.props.value,
        onClick: (e: React.ChangeEvent<HTMLInputElement>) => {
          if (child.props.value) {
            setSelectedValue(child.props.value);
            e.target.blur();
          }

          if (child.props.onClick) {
            child.props.onClick(e);
          }
        },
      })
    );

  return <div className="button-group">{renderChildButtons()}</div>;
};
