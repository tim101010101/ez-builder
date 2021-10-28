export const getVueTemplate = (
  comName: string,
  elContent: string,
  importContent: string = '',
  scriptContent: string = '',
  styleContent: string = '',
): string => {
  return `<template>
     ${elContent}
    </template>
    
    <script>
    import { defineComponent } from 'vue';
    ${importContent}
    
    export default defineComponent({
      name: '${comName}',
      components:{},
      ${scriptContent}
    });
    </script>
    
    <style scoped >
    ${styleContent}
    </style>
    `;
};

export const getAppTemplate = (
  menuContent: string,
  scriptContent: string = '',
  styleContent: string = '',
): string => {
  return `<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
     <n-space vertical>
       <n-layout has-sider>
         <n-layout-sider>
           <n-menu :options="menuOptions"/>
         </n-layout-sider>
         <n-layout-content :native-scrollbar="false" content-style="padding: 40px 200px;" >
           <router-view />
         </n-layout-content>
       </n-layout>
     </n-space>
   </n-config-provider>
 </template>
 
 <script>
 import { defineComponent, h } from "vue";
 import {RouterLink} from 'vue-router';
 import { darkTheme } from 'naive-ui';
 import { zhCN, dateZhCN } from 'naive-ui';
 
 const menuOptions = [${menuContent}]
 
 export default defineComponent({
  name: "App",
  setup() {
    ${scriptContent}
    return {
      darkTheme,
      zhCN,
      dateZhCN,
      menuOptions
    }
  }
 })
 </script>
 <style scoped>
.n-layout-content {
  height: 100vh;
}
.n-p {
  font-size: 18px;
}
${styleContent}
</style>`;
};

export const getMainTemplate = (): string => {
  return `import { createApp } from 'vue';
  import App from './App.vue';
  
  import router from './route';
  
  import {
      create,
      NConfigProvider,
      NSpace,
      NLayout,
      NLayoutSider,
      NLayoutContent,
      NMenu,
      NH1,
      NH2,
      NH3,
      NH4,
      NH5,
      NH6,
      NHr,
      NP,
      NUl,
      NOl,
      NLi,
      NBlockquote,
  } from 'naive-ui';
  
  const naive = create({
      components: [
          NConfigProvider,
          NSpace,
          NLayout,
          NLayoutSider,
          NLayoutContent,
          NMenu,
          NH1,
          NH2,
          NH3,
          NH4,
          NH5,
          NH6,
          NHr,
          NP,
          NUl,
          NOl,
          NLi,
          NBlockquote,
      ],
  });
  
  createApp(App).use(naive).use(router).mount('#app');`;
};

export const getPackageTemplate = (): string => {
  return `{
    "name": "md_vue",
    "version": "0.0.1",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "serve": "vite preview"
    },
    "dependencies": {
        "vue": "^3.2.16",
        "vue-router": "^4.0.12"
    },
    "devDependencies": {
        "@vitejs/plugin-vue": "^1.9.3",
        "naive-ui": "^2.19.11",
        "vite": "^2.6.4"
    }
}
`;
};

export const getRouterTemplate = (routeContent: string): string => {
  return `import { createRouter, createWebHashHistory } from 'vue-router';

  const routes = [${routeContent}];
  
  const router = createRouter({
      history: createWebHashHistory(),
      routes,
  });
  
  export default router;`;
};

export const getHTMLTemplate = (
  pageName: string = 'Vite App',
  srcPath: string = '/src/main.js',
): string => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${pageName}</title>
    </head>
    <body>
      <div id="app"></div>
      <script type="module" src="${srcPath}"></script>
    </body>
  </html>`;
};

export const getViteConfigTemplate = (pluginContent: string = ''): string => {
  return `import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  
  export default defineConfig({
    plugins: [vue(), ${pluginContent}]
  })`;
};
