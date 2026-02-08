const eslintConfig = [
  {
    ignores: [
      'extension/dist/',
      'extension/data/',
      'builder/',
      'data/compiled/',
      '.aon-cache/',
      'docs/',
      '.planet-smars/',
      'node_modules/',
    ],
  },
  {
    files: ['scripts/**/*.mjs', 'extension/build.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        URL: 'readonly',
      },
    },
  },
];

export default eslintConfig;
