const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
        process.env.NODE_ENV === "Production" && require('@fullhuman/postcss-purgecss')({
            content: [
              './src/**/*.tsx',
              './public/index.html'
            ],
            css: ['./src/**/*.css']
        })
    ],
};