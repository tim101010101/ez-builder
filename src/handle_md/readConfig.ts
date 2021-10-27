import config from '../types/config';

import { readFile } from 'fs';

export const getConfig = (path: string): Promise<any | config> => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err: any, data: string) => {
      err && reject(err);
      const configObj: config = JSON.parse(data.trim());
      resolve(configObj);
    });
  });
};
