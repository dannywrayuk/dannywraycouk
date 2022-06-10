import { visitParents } from "unist-util-visit-parents";

// /\\tag{@cite-([a-zA-Z\d\-\_]+)}/g

const addCitationBuilder =
  (
    { citePrefix, displayText, idPrefix, idOffset = 0, parentClass },
    citations
  ) =>
  (node, parents) => {
    if (node.value?.includes(citePrefix)) {
      node.value
        .match(new RegExp(citePrefix + "-([a-zA-Z\\d\\-\\_]+)", "g"))
        ?.forEach((cite) => {
          const citeName = cite.match(
            new RegExp(citePrefix + "-([a-zA-Z\\d\\-\\_]+)")
          )[1];
          const citeNum = citations.findIndex((x) => x === citeName);
          if (citeNum >= 0) {
            node.value = node.value.replaceAll(
              cite,
              displayText.replaceAll("*", citeNum + 1)
            );
          } else {
            citations[citations.length] = citeName;
            node.value = node.value.replaceAll(
              cite,
              displayText.replaceAll("*", citations.length)
            );
            let i;
            if (parentClass) {
              i = parents.findIndex(
                (x) => x.properties?.className?.join() === parentClass
              );
            } else {
              i = parents.length - 1 - idOffset;
            }
            if (parents[i]?.properties?.id) {
              parents[i].properties.id += idPrefix + "-" + citeName;
            } else {
              parents[i].properties.id = idPrefix + "-" + citeName;
            }
          }
        });
    }
  };

const linkCitationsBuilder =
  ({ identifier, displayText, idPrefix }, citations) =>
  (node, parents) => {
    if (node?.value?.includes(identifier)) {
      const link = parents[parents.length - 1]?.properties?.href;
      node.value = displayText.replaceAll(
        "*",
        1 + citations.findIndex((x) => "#" + x === link)
      );
      parents[parents.length - 1].properties.href =
        "#" + idPrefix + "-" + link.substring(1);
    }
  };

export default () => (tree, file) => {
  const figureCitations = [];
  const addFigureCitations = addCitationBuilder(
    {
      citePrefix: "@cite-fig",
      displayText: "Figure *",
      idPrefix: "figure",
      idOffset: 1,
    },
    figureCitations
  );
  const equationCitations = [];
  const addEquationCitations = addCitationBuilder(
    {
      citePrefix: "@cite-eqn",
      displayText: "*",
      idPrefix: "equation",
      parentClass: "math,math-display",
    },
    equationCitations
  );
  const referenceCitations = [];
  const addReferenceCitations = addCitationBuilder(
    {
      citePrefix: "@cite-ref",
      displayText: "[*]",
      idPrefix: "reference",
    },
    referenceCitations
  );
  visitParents(tree, (node, parents) => {
    addFigureCitations(node, parents);
    addEquationCitations(node, parents);
    addReferenceCitations(node, parents);
  });
  const linkFigureCitations = linkCitationsBuilder(
    { identifier: "@fig", displayText: "Fig. *", idPrefix: "figure" },
    figureCitations
  );
  const linkEquationCitations = linkCitationsBuilder(
    { identifier: "@eqn", displayText: "Equation (*)", idPrefix: "equation" },
    equationCitations
  );
  const linkReferenceCitations = linkCitationsBuilder(
    { identifier: "@ref", displayText: "[*]", idPrefix: "reference" },
    referenceCitations
  );
  visitParents(tree, (node, parents) => {
    linkFigureCitations(node, parents);
    linkEquationCitations(node, parents);
    linkReferenceCitations(node, parents);
  });
};
