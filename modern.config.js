import { appTools } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
module.exports = {
  runtime: {
    router: true,
  },
  plugins: [
    appTools(),
    // [
    //   'babel-plugin-import',
    //   {
    //     libraryName: '@arco-design/web-react',
    //     libraryDirectory: 'es',
    //     camel2DashComponentName: false,
    //     style: true, // 样式按需加载
    //   },
    //   {
    //     libraryName: '@arco-design/web-react/icon',
    //     libraryDirectory: 'react-icon',
    //     camel2DashComponentName: false,
    //   },
    // ],
  ],
};
