module.exports = {
  exclude: [
    "nyc.config.js",
    ".eslintrc.js",
    "coverage/**",
    "node_modules/**",
    "test/**",
    "config/**",
  ],
  reporter: [
    "lcov",
    "cobertura",
    "text",
    "text-summary",
  ],
};
