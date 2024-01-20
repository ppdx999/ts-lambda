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

// EXPはn回、MULT(m)を初期値C1に適用する関数を表現する
export const EXP = m => n => n(MULT(m))(C1);

// 与えられた数nが0かどうかの判定は、初期値TRUEに対して
// n回、FALSEを適用した結果として表現できる
// 0回目: TRUE
// 1回目: FALSE(TRUE) --> FALSE
// 2回目: FALSE(FALSE(TRUE)) --> FALSE
export const ISZERO = n => n(x => FALSE)(TRUE);


export const SLOW_SUCC = x =>
  IF(ISZERO(LEFT(x)))
    (PAIR(C1)(RIGHT(x)))
    (PAIR(SUCC(LEFT(x)))(SUCC(RIGHT(x))));


export const PRED = n => RIGHT(n(SLOW_SUCC)(PAIR(C0)(C0)));

// 遅延評価でないので無限ループになる
// g: 初期値
// h: 再帰関数
// n: 回数
export const REC = g => h => n =>
  IF(ISZERO(n))
    (g)
    (h
     (PRED(n))
     (REC(g)(h)(PRED(n)))
    );
