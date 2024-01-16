import * as $ from './main.js';

it('TRUE', () => {
  const result = $.TRUE(1)(2);

  expect(result).toBe(1);
});

it('FALSE', () => {
  const result = $.FALSE(1)(2);

  expect(result).toBe(2);
});

it('IF', () => {
  const result = $.IF($.TRUE)(1)(2);

  expect(result).toBe(1);

  const result2 = $.IF($.FALSE)(1)(2);

  expect(result2).toBe(2);
});

it('PLUS', () => {
  const Y = $.PLUS($.C2)($.C3);

  const result = Y(x => x + 1)(0);

  expect(result).toBe(5);
});
