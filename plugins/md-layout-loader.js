const matter = require("gray-matter");

module.exports = async function (src) {
  const callback = this.async();
  const { layoutFile = "components/MDX/Layout", metadataMutator } =
    this.getOptions({
      title: "MD Layout Loader options",
      type: "object",
      properties: {
        layoutFile: {
          type: "string",
          description: "Location of the file containing the md layout handler.",
        },
        metadataMutator: {
          instanceof: "Function",
          description:
            "A function that takes the frontmatter and mutates or adds properties.",
        },
      },
      additionalProperties: false,
    });
  const { content, data } = matter(src);
  const filePath = this.resourcePath.replace(process.cwd(), "");
  const meta = metadataMutator
    ? metadataMutator(data, filePath, content)
    : data;
  const code =
    `import withLayout from "${layoutFile}";
    export default withLayout(${JSON.stringify(meta)});
  ` + content;
  return callback(null, code);
};
