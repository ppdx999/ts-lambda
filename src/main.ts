export const C0 = s => z => z;
export const C1 = s => z => s(z);
export const C2 = s => z => s(s(z));
export const C3 = s => z => s(s(s(z)));

export const PLUS = m => n => s => z => m(s)(n(s)(z));
