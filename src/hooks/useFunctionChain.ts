import { useState } from "react";
import { FunctionCardData, Position } from "../types";
import { validateExpression } from "../utils";
import { FUNCTION_POSITIONS } from "../constants/positions";

const INITIAL_FUNCTIONS: FunctionCardData[] = [
  { id: 1, equation: "x^2", nextFunctionId: 2, isValid: true },
  { id: 2, equation: "2x+4", nextFunctionId: 4, isValid: true },
  { id: 4, equation: "x-2", nextFunctionId: 5, isValid: true },
  { id: 5, equation: "x/2", nextFunctionId: 3, isValid: true },
  { id: 3, equation: "x^2+20", nextFunctionId: null, isValid: true },
];

export const useFunctionChain = () => {
  const [functions, setFunctions] =
    useState<FunctionCardData[]>(INITIAL_FUNCTIONS);
  const [inputValue, setInputValue] = useState<number>(2); // Initial input value
  const [intermediateValues, setIntermediateValues] = useState<
    Map<number, number>
  >(new Map());

  const evaluateExpression = (equation: string, x: number): number => {
    try {
      let processedEquation = equation.replace(/(\d)x/g, "$1*x");

      processedEquation = processedEquation.replace(/x\^(\d+)/g, "(x**$1)");

      const finalEquation = processedEquation.replace(/x/g, x.toString());

      console.log(`Original: ${equation}, Processed: ${finalEquation}, x=${x}`);

      const result = eval(finalEquation);
      return Number(result.toFixed(2));
    } catch (error) {
      console.error("Error evaluating expression:", error);
      return 0;
    }
  };

  const calculateOutput = (input: number): number => {
    let currentValue = input;

    const executionOrder = [1, 2, 4, 5, 3];

    console.log("Starting calculation with input:", input);

    for (const id of executionOrder) {
      const currentFunction = functions.find((f) => f.id === id);
      if (currentFunction?.isValid) {
        const prevValue = currentValue;
        currentValue = evaluateExpression(
          currentFunction.equation,
          currentValue
        );
        console.log(
          `Function ${id}: ${currentFunction.equation}, ${prevValue} → ${currentValue}`
        );
      }
    }

    return currentValue;
  };

  const getFunctionById = (id: number) => functions.find((f) => f.id === id);

  const getFunctionPosition = (id: number): Position =>
    FUNCTION_POSITIONS.get(id) || { x: 0, y: 0 };

  const updateFunction = (id: number, equation: string, isValid: boolean) => {
    setFunctions((prev) =>
      prev.map((f) => (f.id === id ? { ...f, equation, isValid } : f))
    );
  };

  const getExecutionOrder = (): number[] => {
    const order: number[] = [];
    let currentId = 1;

    while (currentId !== null) {
      order.push(currentId);
      const currentFunction = getFunctionById(currentId);
      currentId = currentFunction?.nextFunctionId as number;
    }

    return order;
  };

  const areAllFunctionsValid = (): boolean =>
    functions.every((f) => f.isValid && validateExpression(f.equation));

  const getConnections = () => {
    const connections = [];
    for (const func of functions) {
      if (func.nextFunctionId) {
        const points = getConnectionPoints(func.id, func.nextFunctionId);
        if (points) {
          connections.push({
            from: func.id,
            to: func.nextFunctionId,
            ...points,
          });
        }
      }
    }
    return connections;
  };

  const getConnectionPoints = (fromId: number, toId: number) => {
    const fromPos = FUNCTION_POSITIONS.get(fromId);
    const toPos = FUNCTION_POSITIONS.get(toId);

    if (!fromPos || !toPos) return null;

    const start = {
      x: fromPos.x + 280,
      y: fromPos.y + 170,
    };

    const end = {
      x: toPos.x,
      y: toPos.y + 170,
    };

    return { start, end };
  };

  return {
    functions,
    inputValue,
    setInputValue,
    updateFunction,
    getFunctionPosition,
    getExecutionOrder,
    areAllFunctionsValid,
    getConnections,
    intermediateValues,
    calculateOutput,
  };
};
