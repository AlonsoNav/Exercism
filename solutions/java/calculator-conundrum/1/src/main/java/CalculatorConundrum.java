class CalculatorConundrum {
    public String calculate(int operand1, int operand2, String operation) {
        if (operation == null)
            throw new IllegalArgumentException("Operation cannot be null");
        switch(operation) {
            case "":
                throw new IllegalArgumentException("Operation cannot be empty");
            case "+":
                return String.format("%d %s %d = %d", operand1, operation, operand2, operand1 + operand2);
            case "*":
                return String.format("%d %s %d = %d", operand1, operation, operand2, operand1 * operand2);
            case "/": {
                if (operand2 == 0)
                    throw new IllegalOperationException("Division by zero is not allowed", new ArithmeticException("Division by zero"));
                return String.format("%d %s %d = %d", operand1, operation, operand2, operand1 / operand2);
            }
            default:
                throw new IllegalOperationException(String.format("Operation '%s' does not exist", operation));
        }
    }
}
