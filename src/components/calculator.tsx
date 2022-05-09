import React, { useState } from 'react';
import { ButtonGroup } from './button-group';
import { Button } from './button';
import { Input } from './input';
import dollarIcon from '../../images/icon-dollar.svg';
import personIcon from '../../images/icon-person.svg';

export const Calculator: React.FC = () => {
  const initialValues = {
    totalBill: '0.00',
    tipPercentage: 0,
    numberOfPeople: 1,
  };

  const [totalBill, setTotalBill] = useState<string>(initialValues.totalBill);
  const [tipPercentage, setTipPercentage] = useState<number>(initialValues.tipPercentage);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(initialValues.numberOfPeople);
  const [customTipAmount, setCustomTipAmount] = useState<number | ''>('');

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
    const amount = (Number(totalBill) * (Number(tipPercentage) / 100)) / Number(numberOfPeople);
    return formatMoney(amount);
  };

  const calculateTotalPerPerson = () => {
    const amount = (Number(totalBill) * (1 + Number(tipPercentage) / 100)) / Number(numberOfPeople);
    return formatMoney(amount);
  };

  const tipPerPerson = calculateTipPerPerson();
  const totalPerPerson = calculateTotalPerPerson();

  const resetValues = () => {
    if (confirm('Are you sure you want to reset all fields?')) {
      setTotalBill(initialValues.totalBill);
      setTipPercentage(initialValues.tipPercentage);
      setNumberOfPeople(initialValues.numberOfPeople);
      setCustomTipAmount('');
    }
  };

  return (
    <div className="tip-calculator">
      <div className="tip-calculator--controls">
        <section>
          <h4>Bill</h4>
          <Input
            type="number"
            value={totalBill}
            placeholder="0.00"
            icon={dollarIcon}
            onChange={(val) => setTotalBill(val)}
            onBlur={(val) => setTotalBill(Number(val).toFixed(2))}
          />
        </section>
        <section>
          <h4>Select Tip %</h4>
          <ButtonGroup
            value={tipPercentage}
            onChange={(val) => {
              if (val === tipPercentage) {
                setTipPercentage(initialValues.tipPercentage);
              } else {
                setTipPercentage(val);
              }
            }}
          >
            <Button value="5">5%</Button>
            <Button value="10">10%</Button>
            <Button value="15">15%</Button>
            <Button value="25">25%</Button>
            <Button value="50">50%</Button>
            <Input
              type="number"
              value={customTipAmount}
              minimum={0}
              placeholder="Custom"
              onChange={(val) => {
                setCustomTipAmount(Number(val));
                setTipPercentage(Number(val));
              }}
            />
          </ButtonGroup>
        </section>
        <section>
          <h4>Number of People</h4>
          <Input
            type="number"
            value={numberOfPeople}
            minimum={1}
            placeholder="1"
            icon={personIcon}
            onChange={(val) => setNumberOfPeople(Number(val))}
            errorMessage={numberOfPeople === 0 ? "Can't be zero" : null}
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
        <Button primary onClick={resetValues}>
          Reset
        </Button>
      </div>
    </div>
  );
};
