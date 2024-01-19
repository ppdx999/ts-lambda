import * as $ from './main.js';

const resolve_number = n => n(x => x + 1)(0);

const expect_number = n =>  expect(resolve_number(n));

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

it('EXP', () => {
  const C8 = $.EXP($.C2)($.C3);

  // C8が正しい関数であるかを確かめるために、Javascriptの整数に変換する
  const result = C8(x => x + 1)(0);

  expect(result).toBe(8);
});

it('ISZERO', () => {
  const result = $.ISZERO($.C0);

  expect(result).toBe($.TRUE);

  const result2 = $.ISZERO($.C1);

  expect(result2).toBe($.FALSE);
});


it('SLOW_SUCC', () => {
  const s0 = $.SLOW_SUCC($.PAIR($.C0)($.C0));

  expect_number($.LEFT(s0)).toBe(1);
  expect_number($.RIGHT(s0)).toBe(0);

  const s1 = $.SLOW_SUCC(s0);

  expect_number($.LEFT(s1)).toBe(2);
  expect_number($.RIGHT(s1)).toBe(1);

  const s2 = $.SLOW_SUCC(s1);

  expect_number($.LEFT(s2)).toBe(3);
  expect_number($.RIGHT(s2)).toBe(2);
});


it('PRED', () => {
  let result = $.PRED($.C0);

  expect_number(result).toBe(0);

  result = $.PRED($.C1);

  expect_number(result).toBe(0);

  result = $.PRED($.C2);

  expect_number(result).toBe(1);
});
