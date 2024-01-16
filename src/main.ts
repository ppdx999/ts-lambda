export const TRUE = x => y => x;
export const FALSE = x => y => y;
export const IF = b => x => y => b(x)(y);

export const PAIR = x => y => f => f(x)(y);
export const LEFT = p => p(TRUE);
export const RIGHT = p => p(FALSE);

export const C0 = s => z => z;
export const C1 = s => z => s(z);
export const C2 = s => z => s(s(z));
export const C3 = s => z => s(s(s(z)));

export const PLUS = m => n => s => z => m(s)(n(s)(z));
