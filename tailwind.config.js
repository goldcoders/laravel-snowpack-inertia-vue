module.exports = {
    mode: 'jit',
    purge:{
      options: {
        keyframes: true,
        fontFace: true,
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
