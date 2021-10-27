// TODO handle text content
import { Regs } from './regs';

export const handleText = (p: string): string[][] => {
  const typeToTextMap: string[][] = [];
  for (const type in Regs) {
    const arr = Regs[type].exec(p);
    arr && typeToTextMap.push([type, arr[0]]);
  }

  return typeToTextMap;
};
