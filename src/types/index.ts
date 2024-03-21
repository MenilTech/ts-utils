export interface Identifiable<T = number> {
  id: T;
}

export type Creation<T extends Identifiable> = Omit<T, "id">;

export type Upsertable<T extends Identifiable> = T | Creation<T>;

export const hasId = <T extends Identifiable>(o: Upsertable<T>): o is T => "id" in o;

export interface LiteObject<T = number> extends Identifiable<T> {
  name: string;
}

export * from "./util"
