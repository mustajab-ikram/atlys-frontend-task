export interface FunctionCardData {
  id: number;
  equation: string;
  nextFunctionId: number | null;
  isValid: boolean;
}

export interface FunctionCardProps {
  data: FunctionCardData;
  onChange: (equation: string, isValid: boolean) => void;
}

export type FunctionChain = Map<number, FunctionCardData>;
