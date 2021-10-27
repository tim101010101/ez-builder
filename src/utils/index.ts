import { Regs } from './regs';

import {
  readSingleFile,
  readSingleDir,
  isDir,
  createDir,
  createFile,
} from './useIO';

import { slicePath, slice } from './usePath';

import { handleText } from './useContent';

import {
  getVueTemplate,
  getAppTemplate,
  getHTMLTemplate,
  getMainTemplate,
  getPackageTemplate,
  getRouterTemplate,
  getViteConfigTemplate,
} from './useTemplate';

export {
  Regs,
  readSingleFile,
  readSingleDir,
  isDir,
  createDir,
  createFile,
  slicePath,
  slice,
  handleText,
  getVueTemplate,
  getAppTemplate,
  getHTMLTemplate,
  getMainTemplate,
  getPackageTemplate,
  getRouterTemplate,
  getViteConfigTemplate,
};
