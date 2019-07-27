export enum StorageKey {
  API_URL = 'api-url'
}

export class AppStorage {
  static set (key: StorageKey, value: any, session: Storage = sessionStorage) {
    session.setItem(key, JSON.stringify(value));
  }

  static get<T> (key: StorageKey, session: Storage = sessionStorage) {
    return JSON.parse(session.getItem(key)) as T;
  }

  static remove (key: StorageKey, session: Storage = sessionStorage) {
    session.removeItem(key);
  }

  static clear (session: Storage = sessionStorage) {
    session.clear();
  }
}
