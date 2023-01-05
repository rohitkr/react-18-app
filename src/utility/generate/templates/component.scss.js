module.exports = (componentName) => ({
  content: `@import "../../TokensOld/base-tokens/typography-token.scss";

.foo-bar {
  font-family: map-get($text-heading-05, "font-family");
  font-size: map-get($text-heading-05, "font-size");
  font-weight: map-get($text-heading-05, "font-weight");
  line-height: map-get($text-heading-05, "line-height");
}
`,
  extension: `.scss`,
});
