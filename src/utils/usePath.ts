import { join } from 'path';

export const slicePath = (p: string): string => {
  return join(__dirname, p);
};

export const slice = (p1: string, p2: string): string => {
  return join(p1, p2);
};
