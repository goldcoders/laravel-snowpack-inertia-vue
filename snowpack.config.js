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
            {
                cmd: 'NODE_ENV=production npx tailwindcss-cli@latest build ./resources/css/app.css -o ./public/css/app.css', // production build command
                watch: 'TAILWIND_MODE=watch NODE_ENV=development postcss ./resources/css/app.css -o ./public/css/app.css -w', // (optional) dev server command
            },
        ],
    ],
    alias: {
        '@': './resources/js',
    },
    devOptions: {
        hmr: true,
        hmrDelay: 50,
    },
    buildOptions: {
        out: 'public',
        clean: false, //! DONT set to true, it will delete all files in public folder
        metaUrlPath: '_snowpack',
    },
    optimize: {
        minify: true,
        entrypoints: ['./resources/js/app.js'],
        splitting: true,
        treeshake: true,
    },
};
