/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
      "resources/js": { url: '/dist/js' },
  },
  plugins: [
    '@snowpack/plugin-vue',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'NODE_ENV=production npx tailwindcss-cli@latest build ./resources/css/app.css -o ./public/dist/css/app.css', // production build command
        watch: 'TAILWIND_MODE=watch NODE_ENV=development postcss ./resources/css/app.css -o ./public/dist/css/app.css -w', // (optional) dev server command
      },
    ],
  ],
  alias: {
    '@': './resources/js',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    hmr: true,// enable hot reload, make sure to add import.meta.hot in app.js
    hmrDelay: 300,
  },
  buildOptions: {
    out: 'public',// laravel css and js are serve in public folder
    clean: false, // warning setting this to true will delete other files in public folder
    metaUrlPath: '_snowpack',
  },
};
