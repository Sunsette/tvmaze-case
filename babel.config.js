module.exports = {
  presets: [
    "next/babel", // Uses the Next.js Babel preset
    "@babel/preset-react", // For React transformation
    "@babel/preset-typescript", // For TypeScript projects
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
};
