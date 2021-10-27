import { handleText } from '../utils';
import { createPage } from './createFile';

export const parseContent = async (
  text: string,
  fileName: string,
  outDir: string,
) => {
  const paragraph = text.split('\r\n');
  let parsedText = '';

  for (let i = 0; i <= paragraph.length; i++) {
    const typeToTextMap = handleText(paragraph[i]);
    for (const typeToText of typeToTextMap) {
      const type = typeToText[0];
      const text = typeToText[1];

      parsedText += `<n-${type}>${text}</n-${type}>`;
    }
  }

  await createPage(fileName, parsedText, outDir);
};

// TODO handle <n-ul>
const handleList = () => {};

// TODO handle <n-br>
const handleBr = () => {};
