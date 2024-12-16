export const validateExpression = (expression: string): boolean => {
  const cleanExpression = expression.replace(/\s/g, "");

  const validExpressionRegex = /^[0-9x]+([+\-*/^][0-9x]+)*$/;

  const hasInvalidChars = /[^0-9x+\-*/^\s]/.test(expression);

  return validExpressionRegex.test(cleanExpression) && !hasInvalidChars;
};

export const getExpressionError = (expression: string): string | null => {
  if (!expression) {
    return "Expression is required";
  }

  if (/[^0-9x+\-*/^\s]/.test(expression)) {
    return "Only numbers, 'x', and basic operators (+,-,*,/,^) are allowed";
  }

  if (!validateExpression(expression)) {
    return "Invalid expression format";
  }

  return null;
};
