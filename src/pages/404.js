import { Flex, Heading } from "@components/core";
import { Layout } from "@components/Layout";
import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";

const Wrapper = styled(Flex)({ marginTop: "80px", rowGap: "50px" });

const BackLink = styled.a({
  color: "var(--color-fg-default)",
  fontFamily: "var(--Sora)",
  opacity: 0.7,
  textDecoration: "underline",
  cursor: "pointer",
});

const Image = styled.img({
  maxWidth: "200px",
});

const NotFound = () => (
  <>
    <Head>
      <script src="/redirect.js"></script>
    </Head>
    <Layout>
      <Wrapper column>
        <Heading>There's nothing to see here..</Heading>
        <Image src="/img/sadfrog.jpeg" />
        <Link href="/">
          <BackLink>back home</BackLink>
        </Link>
      </Wrapper>
    </Layout>
  </>
);

export default NotFound;
