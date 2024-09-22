const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});


test('la multiplicacion de 1 y 2 debe ser 2', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('la multiplicacion de 1 y 4 debe ser 4', () => {
  expect(calculator.multiply(1, 4)).toBe(4);
});


test('la division de 2 y 2 debe ser 1', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test('la division de 8 y 2 debe ser 4', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

// calculo de division por 0

test('la division de 8 y 0 manejar el error', () => {
  expect(() => calculator.divide(8, 0)).toThrow("No se puede dividir entre cero");
});
