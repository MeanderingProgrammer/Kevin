/** @type {import("prettier").Config} */
const config = {
    useTabs: false,
    tabWidth: 4,
    singleQuote: true,
    printWidth: 120,
    plugins: ['prettier-plugin-svelte'],
    overrides: [
        {
            files: '*.svelte',
            options: {
                parser: 'svelte',
            },
        },
    ],
};

export default config;
