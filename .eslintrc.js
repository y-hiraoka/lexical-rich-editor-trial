module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "prettier",
  ],
  rules: {
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)",
      },
    ],
    "no-duplicate-imports": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/button-has-type": "warn",
    "react/no-access-state-in-setstate": "error",
    "react/jsx-boolean-value": "warn",
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-fragments": "warn",
    "react/self-closing-comp": ["warn", { component: true, html: true }],
    "react/void-dom-elements-no-children": "error",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
  },
};
