export interface Position {
  x: number;
  y: number;
}

export interface FunctionCardData {
  id: number;
  equation: string;
  nextFunctionId: number | null;
  isValid: boolean;
}

export interface FunctionCardProps {
  data: FunctionCardData;
  onChange: (equation: string, isValid: boolean) => void;
  isFirst?: boolean;
  isLast?: boolean;
  position: Position;
}

export type FunctionChain = Map<number, FunctionCardData>;
