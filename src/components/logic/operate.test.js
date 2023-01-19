import operate from './operate';

test('let\'s the operate logic', () => {
  expect(operate(4, 8, '+')).toBe('12');
  expect(operate(5, 1, '-')).toBe('4');
  expect(operate(2, 2, 'x')).toBe('4');
  expect(operate(8, 8, '÷')).toBe('1');
  expect(operate(7, 2, '%')).toBe('1');
  expect(operate(7, 0, '÷')).toBe("Can't divide by 0.");
  expect(operate(1, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
});
