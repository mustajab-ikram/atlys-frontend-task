import { FC, useState } from "react";
import { FunctionCardProps } from "../types";
import { getExpressionError } from "../utils";
import DraggableDots from "./DraggableDots";

const FunctionCard: FC<FunctionCardProps> = ({
  data,
  onChange,
  isFirst = false,
  isLast = false,
  position,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleEquationChange = (value: string) => {
    const errorMessage = getExpressionError(value);
    setError(errorMessage);
    onChange(value, !errorMessage);
  };

  return (
    <div
      className="relative bg-white rounded-xl border border-gray-100 shadow-sm p-6 w-[280px]"
      style={{ left: position.x, top: position.y }}
    >
      {/* Card Header */}
      <div className="mb-4 flex items-center gap-2 text-[hsla(0,0%,65%,1)]">
        <DraggableDots
          width={16}
          height={16}
          fill="rgba(165, 165, 165, 1)"
          className="cursor-move"
        />
        <span className="font-inter font-semibold text-[14px]">
          Function: {data.id}
        </span>
      </div>

      {/* Equation Section */}
      <div className="mb-4">
        <label className="block text-gray-900 text-sm font-normal mb-2">
          Equation
        </label>
        <input
          type="text"
          value={data.equation}
          onChange={(e) => handleEquationChange(e.target.value)}
          className={`w-full px-3 py-2 rounded-[8px] border border-[hsla(0,0%,83%,1)] text-sm focus:outline-none
            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-[hsla(0,0%,83%,1)] focus:border-[hsla(0,0%,83%,1)]"
            }`}
          placeholder="Enter equation..."
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>

      {/* Next Function */}
      <div className="mb-10">
        <label className="block text-gray-900 text-sm font-normal mb-2">
          Next function
        </label>
        <select
          disabled
          value={data.nextFunctionId || ""}
          className="w-full h-[38px] px-3 py-1.5  border border-[hsla(0,0%,83%,1)] rounded-[8px] text-sm focus:outline-none focus:border-[hsla(0,0%,83%,1)] bg-[hsla(0,0%,96%,1)] text-gray-400 disabled:cursor-not-allowed"
        >
          <option value={data.nextFunctionId as number}>
            Function: {data.nextFunctionId || "-"}
          </option>
        </select>
      </div>

      {/* Input/Output Row */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>
          <span className="text-sm text-gray-500">input</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">output</span>
          <div className="w-3 h-3 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionCard;
