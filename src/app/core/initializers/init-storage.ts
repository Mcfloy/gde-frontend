import { AppStorage, StorageKey } from 'src/app/shared/utils/app.storage';

export function initStorage () {
  return () => {
    return new Promise((resolve, reject) => {
      AppStorage.set(StorageKey.API_URL, 'http://localhost:3000/api');
      resolve();
    });
  };
}
