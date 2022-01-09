import styled from "@emotion/styled";

export const Button = styled.button({
  background: "none",
  border: "none",
  color: "unset",
  display: "block",
  lineHeight: 0,
});

export const PrimaryButton = styled.button({
  backgroundColor: "var(--text)",
  border: "none",
  borderRadius: "100px",
  padding: "20px 30px",
  color: "var(--background)",
  display: "inline-flex",
  justifyContent: "center",
  flexDirection: "row",
});

export const SecondaryButton = styled.button({
  background: "none",
  border: "2px solid var(--text)",
  borderRadius: "100px",
  padding: "20px 30px",
  color: "var(--text)",
  display: "inline-flex",
  justifyContent: "center",
  flexDirection: "row",
});
