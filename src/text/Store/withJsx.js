export default (originalComponent) => {
  const jsxText = props => originalComponent({
    ...props,
    transformers: [
      'jsx',
    ],
  });
  return jsxText;
};
