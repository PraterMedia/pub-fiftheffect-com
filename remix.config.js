const withBuilderDevTools = require('@builder.io/dev-tools/remix')();

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = withBuilderDevTools({
  appDirectory: 'app',
  ignoredRouteFiles: ['**/.*'],
  watchPaths: ['./public', './.env'],
  server: './server.js',

  /**
   * The following settings are required to deploy Hydrogen apps to Oxygen:
   */
  publicPath: (process.env.HYDROGEN_ASSET_BASE_URL ?? '/') + 'build/',
  assetsBuildDirectory: 'dist/client/build',
  serverBuildPath: 'dist/worker/index.js',
  serverMainFields: ['browser', 'module', 'main'],
  serverConditions: ['worker', process.env.NODE_ENV],
  serverDependenciesToBundle: 'all',
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  serverMinify: process.env.NODE_ENV === 'production',
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatpath: true,
    v3_throwAbortReason: true,
  },
  // browserNodeBuiltinsPolyfill: {
  // 	modules: {
  // 	  vm: true,
  // 	  fs: true,
  // 	  buffer: true,
  // 	  "stream/web": true,
  // 	  worker_threads: true,
  // 	  process: true
  // 	},
  //   },
});
