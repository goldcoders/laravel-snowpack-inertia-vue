/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
      "resources/js": { url: '/dist/js' },
  },
  plugins: [
    '@snowpack/plugin-vue',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-dotenv',
  ],
  alias: {
    '@': './resources/js',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    hmr: true,// enable hot reload, make sure to add import.meta.hot in app.js
    tailwindConfig: './tailwind.config.js',
  },
  buildOptions: {
    out: 'public',// laravel css and js are serve in public folder
    clean: false, // warning setting this to true will delete other files in public folder
    metaUrlPath: '_snowpack',
  },
};
