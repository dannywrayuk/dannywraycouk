import { Flex, Heading, Text, Link, Image } from "@components/core";
import { Layout } from "@components/Layout";
import Head from "next/head";

const NotFound = () => (
  <>
    <Head>
      <script src="/redirect.js"></script>
    </Head>
    <Layout>
      <Flex column center rg={50}>
        <Heading>There's nothing to see here..</Heading>
        <Image
          src="/img/sadfrog.jpeg"
          width={200}
          height={200}
          layout="fixed"
        />
        <Link href="/" variant="underlineAlways">
          <Text>back home</Text>
        </Link>
      </Flex>
    </Layout>
  </>
);

export default NotFound;
