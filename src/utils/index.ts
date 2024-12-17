export const validateExpression = (expression: string): boolean => {
  // Remove all whitespace
  const cleanExpression = expression.replace(/\s/g, '');

  // Regular expression to match valid mathematical expressions
  // Explanation:
  // - Allows 'x' as variable
  // - Allows numbers (including decimals)
  // - Allows operators +, -, *, /, ^
  // - Validates basic structure to ensure operators are between numbers/variables
  const validExpressionRegex = /^[0-9x]+([+\-*/^][0-9x]+)*$/;

  // Check for invalid characters
  const hasInvalidChars = /[^0-9x+\-*/^\s]/.test(expression);

  // Validate structure and characters
  return validExpressionRegex.test(cleanExpression) && !hasInvalidChars;
};

// Custom error messages for different validation cases
export const getExpressionError = (expression: string): string | null => {
  if (!expression) {
    return 'Expression is required';
  }

  if (/[^0-9x+\-*/^\s]/.test(expression)) {
    return "Only numbers, 'x', and basic operators (+,-,*,/,^) are allowed";
  }

  if (!validateExpression(expression)) {
    return 'Invalid expression format';
  }

  return null;
};
