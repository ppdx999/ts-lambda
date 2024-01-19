import * as $ from './main.js';

// Church数のままだとテストが難しいのでJavascriptの整数に変換する
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
  expect_number($.SUCC($.C0)).toBe(1);
  expect_number($.SUCC($.C1)).toBe(2);
  expect_number($.SUCC($.C2)).toBe(3);
});

it('PLUS', () => {
  expect_number($.PLUS($.C2)($.C3)).toBe(5);
});

it('MULT', () => {
  expect_number($.MULT($.C2)($.C3)).toBe(6);
});

it('EXP', () => {
  expect_number($.EXP($.C2)($.C3)).toBe(8);
});

it('ISZERO', () => {
  expect($.ISZERO($.C0)).toBe($.TRUE);
  expect($.ISZERO($.C1)).toBe($.FALSE);
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
