import { regs } from '../types/regs';

export const Regs: regs = {
  // text
  p: /^((?<!(\#|\+)).)+?$/,
  // # x
  h1: /(?<=(^\#\s))(.*)/,
  // ## x
  h2: /(?<=(^\#\#\s))(.*)/,
  // ### x
  h3: /(?<=(^\#\#\#\s))(.*)/,
  // #### x
  h4: /(?<=(^\#\#\#\#\s))(.*)/,
  // ##### x
  h5: /(?<=(^\#\#\#\#\#\s))(.*)/,
  // ###### x
  h6: /(?<=(^\#\#\#\#\#\#\s))(.*)/,
  // ** x **
  // bold: /(\*\*).+?(\*\*)/,
  // * x *
  // italic: /(?<!\*)(\*[^\*].+?[^\*]\*)(?!\*)/,
  // ` x `
  // focus: /(?<!`)(`[^`].+?[^`]`)(?!`)/,
  // > x
  // blockquote: /(?<!\>)(\>\s([^\>\n]*))/,
  // + x
  // - x
  li: /(?<=^(\+\s)).+/,
  // 1. x
  // inOrderList: /(?<!(\d\.))((\d\.)\s).*\n/,
  // TODO [x](x.com)
  // link: / /,
  // TODO
  // ```js
  //    xxx
  // ```
  // codeBlock: / /,
};
