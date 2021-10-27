import { readFile, readdir, lstat, mkdir, writeFile } from 'fs';
import { Stats } from 'fs';

export const readSingleFile = (path: string): Promise<any | string> => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err: any, data: string) => {
      err && reject(err);
      resolve(data);
    });
  });
};

export const readSingleDir = (path: string): Promise<any | Array<string>> => {
  return new Promise((resolve, reject) => {
    readdir(path, 'utf-8', (err: any, files: Array<string>) => {
      err && reject(err);
      resolve(files);
    });
  });
};

export const isDir = (path: string): Promise<any | Stats> => {
  return new Promise((resolve, reject) => {
    lstat(path, (err: any, data: Stats) => {
      err && reject(err);
      resolve(data.isDirectory());
    });
  });
};

export const createDir = (path: string): Promise<any | string> => {
  return new Promise((resolve, reject) => {
    mkdir(path, { recursive: true }, (err) => {
      err ? reject(err) : resolve('create success!');
    });
  });
};

export const createFile = (
  path: string,
  text: string,
): Promise<any | string> => {
  return new Promise((resolve, reject) => {
    writeFile(path, text, 'utf-8', (err) => {
      err ? reject(err) : resolve('write success!');
    });
  });
};
