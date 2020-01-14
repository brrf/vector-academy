const presets = [
  [
    "@babel/env",
    {
      targets: [
        'last 2 versions',
        'not dead',
        'not < 2%',
        ],
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };