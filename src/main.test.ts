import * as $ from './main.js';

it('PLUS', () => {
  const Y = $.PLUS($.C2)($.C3);

  const result = Y(x => x + 1)(0);

  expect(result).toBe(5);
});
