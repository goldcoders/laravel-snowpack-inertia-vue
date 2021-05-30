/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    //! Mount Laravel Resources
      "resources/js": { url: '/js' },
  },
  plugins: [
    '@snowpack/plugin-vue',
    '@snowpack/plugin-dotenv', 
    //? use a prefix in .env: SNOWPACK_PUBLIC_
    //? use in any js as: `import.meta.env.SNOWPACK_PUBLIC_{NAME}`
    [
      '@snowpack/plugin-run-script',
      //! Run Tailwind Commands
      {
        cmd: 'NODE_ENV=production npx tailwindcss-cli@latest build ./resources/css/app.css -o ./public/css/app.css', // production build command
        watch: 'TAILWIND_MODE=watch NODE_ENV=development postcss ./resources/css/app.css -o ./public/css/app.css -w', // (optional) dev server command
      },
    ],
  ],
  alias: {
    //? Useful for Using In Imports ie: @/RelativeFile.vue
    '@': './resources/js',
  },
  packageOptions: {
    //TODO: use yarn snowpack add `package_name` instead of npm
    // cache: '.snowpack' //// Only Working when Using Remote Source
  },
  devOptions: {
    hmr: true,//! enable hot reload, make sure to add import.meta.hot in app.js
    hmrDelay: 300, //! needed delay so we can see tailwind classes change during HMR
    // hmrErrorOverlay: true //// Not working
  },
  //TODO: set clean true, and out to public/dist
  //! when dev we cannot load other /_snowpack/pkg 
  //! should be pointed to /dist/_snowpack
  buildOptions: {
    out: 'public',//laravel public folder 
    clean: false, //! setting true will delete neccessary files in laravel public folder
    metaUrlPath: '_snowpack', 
  },
  optimize: {
    minify: true,
    //! If Needed to Use Some Options Below Uncomment This
    // entrypoints: ['./resources/js/app.js'],     
   //? Can Be Used to Target ES version 
    // target: "es2020", 
    // sourcemap: "inline", //// Not Working
    // splitting: true, //// Not Working
    // treeshake: true, //// Not Working
 },
};
