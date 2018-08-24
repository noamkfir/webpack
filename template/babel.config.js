module.exports = {
  presets: [
    ["@babel/preset-env", {
      "modules": false
    }]
  ],
  plugins: [
    "transform-vue-jsx", 
    "@babel/plugin-transform-runtime",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions"
  ]{{#if_or unit e2e}},
  env: {
    test: {
      presets: [
        "@babel/preset-env"
      ]{{#if_eq runner "karma"}},
      plugins: [
        "transform-vue-jsx",
        "istanbul"
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-proposal-function-sent",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-throw-expressions"
      ]{{/if_eq}}{{#if_eq runner "jest"}},
      plugins: [
        "transform-vue-jsx",
        "@babel/plugin-transform-modules-commonjs",
        "dynamic-import-node",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-proposal-function-sent",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-throw-expressions"
      ]{{/if_eq}}
    }
  }{{/if_or}}
}
