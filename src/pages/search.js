import styled from "@emotion/styled";
import { Layout } from "@components/Layout";
import {
  BubbleHighlight,
  Flex,
  Link,
  Heading,
  Text,
  Icon,
} from "@components/core";
import { useSearch } from "@utils/useSearch";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { mq } from "@utils/breakpoints";
import { AiFillInfoCircle } from "react-icons/ai";
import { commonSearches } from "@utils/constants";

const Wrapper = styled(Flex)({
  maxWidth: "700px",
  margin: "0 auto",
  width: "100%",
});

const SearchBar = styled.input({
  width: "100%",
  height: "40px",
  outline: "none",
  border: "none",
  padding: "10px 20px",
  backgroundColor: "var(--feintGrey)",
  borderRadius: "40px",
  fontSize: "1rem",
  [mq.sm]: {
    width: "80%",
  },
  [mq.lg]: {
    width: "100%",
  },
});

const ResultsWrapper = styled(Flex)({
  paddingTop: "40px",
  width: "100%",
  [mq.sm]: {
    width: "80%",
  },
  [mq.lg]: {
    width: "100%",
  },
});

const ResultWrapper = styled.div({
  borderTop: "1px solid var(--feintGrey)",
  padding: "20px 0",
});

const Results = ({ results }) => (
  <ResultsWrapper dir="column">
    <Text _css={{ margin: "20px 0" }}>{results.length} Results</Text>
    {results.map(({ item }, id) => (
      <ResultWrapper key={id}>
        <Heading>{item.title}</Heading>
        <Text color="var(--midGrey)">{item.dateString}</Text>
        <Text>{item.abstract}</Text>
      </ResultWrapper>
    ))}
  </ResultsWrapper>
);

const NoResults = () => (
  <Flex ai="center" jc="center" _css={{ marginBottom: "40px" }}>
    <Icon as={AiFillInfoCircle} size="1.25rem" />
    <Text>No Results</Text>
  </Flex>
);

const SearchSuggestions = ({ searchTerm }) => (
  <ResultsWrapper dir="column" ai="center">
    {searchTerm && <NoResults />}
    <Text _css={{ textAlign: "center", marginBottom: "10px" }}>
      Looking for any of these?
    </Text>
    <Flex flexWrap rg={10} cg={10} jc="center" _css={{ maxWidth: "400px" }}>
      {commonSearches.map((s, id) => (
        <Link href={s.link} key={id}>
          <Text>
            <BubbleHighlight>{s.name}</BubbleHighlight>
          </Text>
        </Link>
      ))}
    </Flex>
  </ResultsWrapper>
);

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const searchFunction = useSearch();
  const router = useRouter();
  useEffect(() => {
    if (router.query.q) setSearchResults(searchFunction(router.query.q));
    else setSearchResults([]);
  }, [router.query]);
  return (
    <Layout>
      <Wrapper column>
        <Heading _css={{ margin: "30px 0" }}>Search</Heading>
        <SearchBar
          placeholder="Type here to find things"
          defaultValue={router.query.q}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (e.target.value)
                router.push("search?q=" + encodeURIComponent(e.target.value));
              else router.push("search");
            }
          }}
        />
        {searchResults.length > 0 ? (
          <Results results={searchResults} />
        ) : (
          <SearchSuggestions searchTerm={router.query.q} />
        )}
      </Wrapper>
    </Layout>
  );
};

export default Search;
