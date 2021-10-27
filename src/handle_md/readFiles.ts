import { readSingleDir, readSingleFile } from '../utils';
import { slice } from '../utils';
import { parseContent } from './parseContent';

// TODO use dfs refact
export const readAllMD = async (docsPath: string, outDir: string) => {
  const files: string[] = await readSingleDir(docsPath);
  const fileNameArr: string[] = [];

  for (const fileName of files) {
    const text = await readSingleFile(slice(docsPath, fileName));

    fileNameArr.push(fileName.slice(0, -3));

    await parseContent(text, fileName, outDir);
  }

  return fileNameArr;
};
