import React from 'react';
import { FunctionChain, Position } from '../types';

interface ConnectionLinesProps {
  functionPositions: Map<number, Position>;
  functionChain: FunctionChain;
}

const ConnectionLines: React.FC<ConnectionLinesProps> = ({
  functionPositions,
  functionChain,
}) => {
  const drawPath = (startPos: Position, endPos: Position) => {
    const midX = (startPos.x + endPos.x) / 2;
    return `M ${startPos.x + 280} ${startPos.y + 80} 
            C ${midX + 140} ${startPos.y + 80},
              ${midX - 140} ${endPos.y + 80},
              ${endPos.x} ${endPos.y + 80}`;
  };

  return (
    <svg className='absolute inset-0 w-full h-full pointer-events-none'>
      {Array.from(functionChain.entries()).map(([id, node]) => {
        if (node.nextFunctionId !== null) {
          const startPos = functionPositions.get(id);
          const endPos = functionPositions.get(node.nextFunctionId);
          if (startPos && endPos) {
            return (
              <path
                key={`${id}-${node.nextFunctionId}`}
                d={drawPath(startPos, endPos)}
                stroke='#93C5FD'
                strokeWidth='2'
                fill='none'
              />
            );
          }
        }
        return null;
      })}
    </svg>
  );
};

export default ConnectionLines;
