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

it('PAIR', () => {
  const result = $.PAIR(1)(2)(x => y => x + y);

  expect(result).toBe(3);
});

it('LEFT', () => {
  const result = $.LEFT($.PAIR(1)(2));

  expect(result).toBe(1);
});

it('RIGHT', () => {
  const result = $.RIGHT($.PAIR(1)(2));

  expect(result).toBe(2);
});

it('SUCC', () => {
  const C3 = $.SUCC($.C2);

  // C3が正しい関数であるかを確かめるために、Javascriptの整数に変換する
  const result = C3(x => x + 1)(0);

  expect(result).toBe(3);
});

it('PLUS', () => {
  const C5 = $.PLUS($.C2)($.C3);

  // C5が正しい関数であるかを確かめるために、Javascriptの整数に変換する
  const result = C5(x => x + 1)(0);

  expect(result).toBe(5);
});

it('MULT', () => {
  const C6 = $.MULT($.C2)($.C3);

  // C6が正しい関数であるかを確かめるために、Javascriptの整数に変換する
  const result = C6(x => x + 1)(0);

  expect(result).toBe(6);
});
