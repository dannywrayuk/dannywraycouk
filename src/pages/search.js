import styled from "@emotion/styled";
import { Layout } from "@components/Layout";
import { Column } from "@components/core";
import { useSearch } from "@utils/useSearch";
import { useState } from "react";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "0 auto",
});

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchFunction = useSearch();
  return (
    <Layout>
      <Wrapper>
        <input
          placeholder="Type here to find things"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        {searchTerm.length > 2 ? (
          searchFunction(searchTerm).map((r, id) => (
            <p key={id + "searchResult"}>{r.item.title}</p>
          ))
        ) : (
          <div />
        )}
      </Wrapper>
    </Layout>
  );
};

export default Search;
