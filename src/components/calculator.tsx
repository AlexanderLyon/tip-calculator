import React, { useState } from 'react';
import { ButtonGroup } from './button-group';
import { Button } from './button';
import { Input } from './input';
import dollarIcon from '../../images/icon-dollar.svg';
import personIcon from '../../images/icon-person.svg';

export const Calculator: React.FC = () => {
  const [totalBill, setTotalBill] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(0);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(0);

  const formatMoney = (amount: number): string => {
    const options = {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    };

    const formatter = new Intl.NumberFormat('en-US', options);
    return formatter.format(amount);
  };

  const calculateTipPerPerson = () => {
    const amount = (totalBill * (tipPercentage / 100)) / numberOfPeople;
    return formatMoney(amount);
  };

  const calculateTotalPerPerson = () => {
    const amount = (totalBill * (1 + tipPercentage / 100)) / numberOfPeople;
    return formatMoney(amount);
  };

  const tipPerPerson = calculateTipPerPerson();
  const totalPerPerson = calculateTotalPerPerson();

  return (
    <div className="tip-calculator">
      <div className="tip-calculator--controls">
        <section>
          <h4>Bill</h4>
          <Input
            type="number"
            isCurrency
            defaultValue={(0.0).toFixed(2)}
            placeholder="0.00"
            icon={dollarIcon}
            onChange={(val) => setTotalBill(Number(val))}
          />
        </section>
        <section>
          <h4>Select Tip %</h4>
          <ButtonGroup
            onChange={(value) => {
              setTipPercentage(value);
            }}
          >
            <Button value="5">5%</Button>
            <Button value="10">10%</Button>
            <Button value="15">15%</Button>
            <Button value="25">25%</Button>
            <Button value="50">50%</Button>
            <Input type="text" placeholder="Custom" />
          </ButtonGroup>
        </section>
        <section>
          <h4>Number of People</h4>
          <Input
            type="number"
            defaultValue={1}
            placeholder="0"
            icon={personIcon}
            onChange={(val) => setNumberOfPeople(Number(val))}
          />
        </section>
      </div>
      <div className="tip-calculator--result">
        <div className="tip-calculator--total">
          <div>
            <p className="tip-calculator--total__title">Tip Amount</p>
            <p className="tip-calculator--total__subtitle">/ person</p>
          </div>
          <h1>{tipPerPerson}</h1>
        </div>
        <div className="tip-calculator--total">
          <div>
            <p className="tip-calculator--total__title">Total</p>
            <p className="tip-calculator--total__subtitle">/ person</p>
          </div>
          <h1>{totalPerPerson}</h1>
        </div>
        <Button primary>Reset</Button>
      </div>
    </div>
  );
};
