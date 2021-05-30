module.exports = {
    mode: 'jit',
    purge:{
      // preserveHtmlElements: false, // useful for markdown source files
      options: {
        // keyframes: true,
        // fontFace: true,
        // safelist: ['add-here-new-class-not-to-purge'],
        // blocklist: [/^debug-/],
      },
      content: [
        // './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
      ]
    },
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
    // specify other options here
};
