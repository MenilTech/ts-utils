export interface TypedStorage<T> {
  setItem<U extends keyof T>(key: U, value: T[U]): void;
  getItem<U extends keyof T>(key: U): T[U] | undefined;
  removeItem<U extends keyof T>(key: U): void;
  clear(): void;
}

export class BrowserLocalStorage<StorageMap> implements TypedStorage<StorageMap> {
  private readonly storage: Storage;

  constructor() {
    this.storage = window?.localStorage;
    if (!this.storage) {
      throw new Error("Local storage not available");
    }
  }

  setItem<U extends keyof StorageMap>(key: U, value: StorageMap[U]): void {
    this.storage.setItem(key.toString(), JSON.stringify(value));
  }

  getItem<U extends keyof StorageMap>(key: U): StorageMap[U] | undefined {
    const value = this.storage?.getItem(key.toString());
    if (value) return JSON.parse(value) as StorageMap[U];
    return undefined;
  }

  removeItem<U extends keyof StorageMap>(key: U): void {
    this.storage.removeItem(key.toString());
  }

  clear(): void {
    this.storage.clear();
  }
}
