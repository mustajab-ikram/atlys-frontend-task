import { Position } from '../types';

export const FUNCTION_POSITIONS = new Map<number, Position>([
  [1, { x: 50, y: 50 }], // First card
  [2, { x: 400, y: 50 }], // Second card (middle top)
  [3, { x: 750, y: 50 }], // Last card (right)
  [4, { x: 225, y: 300 }], // Bottom left
  [5, { x: 575, y: 300 }], // Bottom right
]);
