import { Flex, Heading, Hr, Link, Text } from "@components/core";
import { Layout, LayoutCore, SectionSpacing } from "@components/Layout";
import styled from "@emotion/styled";
import { mq } from "@utils/breakpoints";

const PdfWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "stretch",
  backgroundColor: "var(--color-bg-muted)",
  padding: "10px 20px",
  margin: "20px -10px 0",
  borderRadius: "0.5em",
  textAlign: "center",
  rowGap: "10px",
  [mq.sm]: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const PdfLink = styled(Link)({
  backgroundColor: "var(--color-brand-primary)",
  color: "black",
  padding: "5px 10px",
  borderRadius: "0.5em",
});

export const ProjectPdf = ({
  children,
  data: { title, abstract, pdfLink },
  className,
}) => (
  <Layout>
    <Flex column>
      <Heading mt={60}>{title}</Heading>
      <Text>{abstract}</Text>
      <Hr />
      <PdfWrapper>
        <Text>The PDF for this project is available here</Text>
        <PdfLink href={pdfLink}>
          <Text>View PDF</Text>
        </PdfLink>
      </PdfWrapper>
    </Flex>
    <Flex column rg="10px" className={className}>
      {children}
    </Flex>
  </Layout>
);
