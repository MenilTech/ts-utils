/**
 * Add null and undefined as possible value for fields of T
 */
export type Nullable<T> = {
  [P in keyof T]: T[P] | null | undefined;
};

/**
 * Extracts out the element type for arrays or leaves the type alone
 */
export type Flatten<T> = T extends Array<infer I> ? I : T;

/**
 * Get keys from object that are of given type
 */
export type KeysMatching<T, V> = { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T];

/**
 * Get object type stripped of null or undefined values
 */
export type NonNullObject<T> = { [K in keyof T]-?: NonNullable<T[K]> };

/** Define a type that is the union of numbers from 0 to N */
export type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;
