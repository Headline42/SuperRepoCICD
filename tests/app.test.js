// tests/app.test.js

describe('App Tests', () => {

  beforeEach(() => {
    // Set up DOM
    document.body.innerHTML = `
      <h1>Hello World!</h1>
      <p>This is HTML5 Boilerplate working correctly.</p>
    `;
  });

  test('should have correct page title', () => {
    const h1 = document.querySelector('h1');
    expect(h1.textContent).toBe('Hello World!');
  });

  test('should have welcome message', () => {
    const p = document.querySelector('p');
    expect(p.textContent).toBe('This is HTML5 Boilerplate working correctly.');
  });

  test('should have required HTML elements', () => {
    expect(document.querySelector('h1')).toBeTruthy();
    expect(document.querySelector('p')).toBeTruthy();
  });

});

// Math utility tests
describe('Math Utils', () => {

  test('should add two numbers correctly', () => {
    const add = (a, b) => a + b;
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('should multiply two numbers correctly', () => {
    const multiply = (a, b) => a * b;
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(0, 5)).toBe(0);
  });

  test('should handle edge cases', () => {
    const divide = (a, b) => b !== 0 ? a / b : 'Cannot divide by zero';
    expect(divide(10, 2)).toBe(5);
    expect(divide(10, 0)).toBe('Cannot divi  de by zero');
  });

});
