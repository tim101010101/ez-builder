import { createFile } from '../utils';

import { getVueTemplate } from '../utils';

export const createPage = async (
  fileName: string,
  text: string,
  outDir: string,
) => {
  const curName = fileName.slice(0, -3);
  await createFile(
    `${outDir}/main/views/${curName}.vue`,
    getVueTemplate(curName, text),
  );
};
