import { useState } from 'react';
import { FunctionCardData } from '../types';

const INITIAL_FUNCTIONS: FunctionCardData[] = [
  { id: 1, equation: 'x^2', nextFunctionId: 2, isValid: true },
  { id: 2, equation: '2x+4', nextFunctionId: 4, isValid: true },
  { id: 3, equation: 'x^2+20', nextFunctionId: null, isValid: true },
  { id: 4, equation: 'x-2', nextFunctionId: 5, isValid: true },
  { id: 5, equation: 'x/2', nextFunctionId: 3, isValid: true },
];

export const useFunctionChain = () => {
  const [functions, setFunctions] =
    useState<FunctionCardData[]>(INITIAL_FUNCTIONS);
  const [inputValue, setInputValue] = useState<number>(2); // Initial input value

  const evaluateExpression = (equation: string, x: number): number => {
    try {
      let processedEquation = equation.replace(/(\d)x/g, '$1*x');

      processedEquation = processedEquation.replace(/x\^(\d+)/g, '(x**$1)');

      const finalEquation = processedEquation.replace(/x/g, x.toString());

      const result = eval(finalEquation);
      return Number(result.toFixed(2));
    } catch (error) {
      console.error('Error evaluating expression:', error);
      return 0;
    }
  };

  const calculateOutput = (input: number): number => {
    let currentValue = input;

    const executionOrder = [1, 2, 4, 5, 3];

    for (const id of executionOrder) {
      const currentFunction = functions.find((f) => f.id === id);
      if (currentFunction?.isValid) {
        const prevValue = currentValue;
        currentValue = evaluateExpression(
          currentFunction.equation,
          currentValue
        );
        console.log(
          `Function ${id}: ${currentFunction.equation}, ${prevValue}, ${currentValue}`
        );
      }
    }

    return currentValue;
  };

  const updateFunction = (id: number, equation: string, isValid: boolean) => {
    setFunctions((prev) =>
      prev.map((f) => (f.id === id ? { ...f, equation, isValid } : f))
    );
  };

  return {
    functions,
    inputValue,
    setInputValue,
    updateFunction,
    calculateOutput,
  };
};
