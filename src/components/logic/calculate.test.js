import calculate from './calculate';

const object = {
  total: null,
  next: null,
  operation: null,
};

describe('testing calculate logic', () => {
  test('on AC button clicked, clear results', () => {
    const buttonName = 'AC';
    const obj = { ...object, next: '5' };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(object);
  });

  test('when next and total is 0, then object is empty ', () => {
    const buttonName = '0';
    const obj = { ...object, next: '0', total: '0' };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({});
  });

  test('when no operation, update next and clear value', () => {
    const buttonName = '8';
    const obj = { ...object };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ next: '8', total: null });
  });

  test('when button is . ', () => {
    const buttonName = '.';
    const obj = { ...object, next: '0.985' };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ ...obj });
  });

  test('when the button is = ', () => {
    const buttonName = '=';
    const obj = { total: '7070', next: '0404', operation: '+' };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ ...object, total: '7474' });
  });

  test('when user puts an operation after pressing = ', () => {
    const buttonName = '-';
    const obj = { ...object, total: '55' };
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ ...object, total: '55', operation: '-' });
  });
});
