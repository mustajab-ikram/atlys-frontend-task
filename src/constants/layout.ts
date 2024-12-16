import { Position } from "../types";

export const LAYOUT_CONFIG = {
  CARD_WIDTH: 280,
  CARD_HEIGHT: 220,
  HORIZONTAL_GAP: 70,
  VERTICAL_GAP: 100,
  TOP_MARGIN: 50,
  LEFT_MARGIN: 50,
  INPUT_OUTPUT_Y_OFFSET: 180,
  INPUT_POINT_OFFSET: 10,
  OUTPUT_POINT_OFFSET: -10,
  POINTS_Y_OFFSET: 180,
  CARD_PADDING: 24,
};

export const calculatePositions = () => {
  const {
    CARD_WIDTH,
    CARD_HEIGHT,
    HORIZONTAL_GAP,
    VERTICAL_GAP,
    TOP_MARGIN,
    LEFT_MARGIN,
  } = LAYOUT_CONFIG;

  const firstRowX = LEFT_MARGIN;
  const secondRowX = firstRowX + CARD_WIDTH / 2 + HORIZONTAL_GAP / 2;

  return new Map<number, Position>([
    [1, { x: firstRowX, y: TOP_MARGIN }],
    [2, { x: firstRowX + CARD_WIDTH + HORIZONTAL_GAP, y: TOP_MARGIN }],
    [3, { x: firstRowX + (CARD_WIDTH + HORIZONTAL_GAP) * 2, y: TOP_MARGIN }],

    [4, { x: secondRowX, y: TOP_MARGIN + CARD_HEIGHT + VERTICAL_GAP }],
    [
      5,
      {
        x: secondRowX + CARD_WIDTH + HORIZONTAL_GAP,
        y: TOP_MARGIN + CARD_HEIGHT + VERTICAL_GAP,
      },
    ],
  ]);
};

export const FUNCTION_POSITIONS = calculatePositions();
