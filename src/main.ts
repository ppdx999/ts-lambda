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

// SUCCはn回、sを初期値zに適用する関数を表現する
export const SUCC = n => s => z => s(n(s)(z));

// PLUSはn回、sを初期値mに適用する関数を表現する
export const PLUS = m => n => n(SUCC)(m);

// MULTはn回、PLUS(m)を初期値C0に適用する関数を表現する
export const MULT = m => n => n(PLUS(m))(C0);
