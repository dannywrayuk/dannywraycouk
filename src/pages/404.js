import { Flex, Heading, Text, Link } from "@components/core";
import { Layout } from "@components/Layout";
import styled from "@emotion/styled";
import Head from "next/head";

const Image = styled.img({
  maxWidth: "200px",
});

const NotFound = () => (
  <>
    <Head>
      <script src="/redirect.js"></script>
    </Head>
    <Layout>
      <Flex column center rg={50}>
        <Heading>There's nothing to see here..</Heading>
        <Image src="/img/sadfrog.jpeg" />
        <Link href="/" variant="underlineAlways">
          <Text>back home</Text>
        </Link>
      </Flex>
    </Layout>
  </>
);

export default NotFound;
