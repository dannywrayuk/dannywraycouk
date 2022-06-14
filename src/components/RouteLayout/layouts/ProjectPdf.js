import { Flex, Heading, Hr, Link, Text } from "@components/core";
import { Layout, LayoutCore, SectionSpacing } from "@components/Layout";
import styled from "@emotion/styled";
import { mq } from "@utils/breakpoints";

const PdfWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "var(--color-bg-muted)",
  padding: "10px 20px",
  margin: "20px -10px 0",
  borderRadius: "0.5em",
  textAlign: "center",
  [mq.sm]: {
    flexDirection: "row",
  },
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
        <Text>
          <Link href={pdfLink}>View PDF</Link>
        </Text>
      </PdfWrapper>
    </Flex>
    <Flex column rg="10px" className={className}>
      {children}
    </Flex>
  </Layout>
);
