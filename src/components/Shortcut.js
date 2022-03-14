import styled from "@emotion/styled";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  columnGap: "10px",
});

const Key = styled.div({
  padding: "6px 10px",
  backgroundColor: "var(--primary30)",
  borderRadius: "10px",
  fontFamily: "var(--Sora)",
  color: "var(--text)",
  fontSize: "0.9rem",
});

export const Shortcut = ({ keys }) => (
  <Wrapper>
    {keys.map((key, id) => (
      <Key key={key + id}>{key}</Key>
    ))}
  </Wrapper>
);
