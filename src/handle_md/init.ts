import { params } from '../types/param';

import {
  slice,
  slicePath,
  createFile,
  createDir,
  getAppTemplate,
  getHTMLTemplate,
  getMainTemplate,
  getPackageTemplate,
  getRouterTemplate,
  getViteConfigTemplate,
} from '../utils';

import { readAllMD } from './readFiles';

// E:\VSCode\Projects\demo\ez-builder\web
export const initProject = async () => {
  console.log('Start to initialize the project...');

  const rootPath = slicePath('../../web');
  const mainPath = slice(rootPath, 'main');
  const routePath = slice(mainPath, 'route');
  const viewsPath = slice(mainPath, 'views');

  await createDir(rootPath);
  await createDir(mainPath);
  await createDir(routePath);
  await createDir(viewsPath);

  console.log('Directory structure is created...');
  console.log('Start to initialize the project files...');

  await createFile(slice(rootPath, 'package.json'), getPackageTemplate());
  await createFile(slice(rootPath, 'index.html'), getHTMLTemplate());
  await createFile(slice(rootPath, 'vite.config.js'), getViteConfigTemplate());
  await createFile(slice(mainPath, 'main.js'), getMainTemplate());

  console.log('Start to parse md documents...');

  const fileNameArr = await readAllMD(slicePath('../../docs'), rootPath);

  console.log('All the md documents are parsed...');
  console.log('Start toinitialize the root components...');

  const { menuOptions, routes } = getParams(fileNameArr);

  // create App.vue
  await createFile(slice(mainPath, 'App.vue'), getAppTemplate(menuOptions));

  // create route/index.js
  await createFile(slice(routePath, 'index.js'), getRouterTemplate(routes));

  return 'Parsing is complete!!';
};

const getParams = (fileNameArr: string[]): params => {
  let routes = '';
  let menuOptions = '';

  for (const fileName of fileNameArr) {
    routes += `{ path: '/${fileName}', component: import('../views/${fileName}.vue') },`;

    menuOptions += `{
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  path: '/${fileName}',
                },
              },
              { default: () => '${fileName}' },
            ),
          key: '${fileName}',
        },`;
  }

  return {
    routes,
    menuOptions,
  };
};
