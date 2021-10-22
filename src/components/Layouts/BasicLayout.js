import { CenterContent } from "../CenterContent";
import { Footer } from "../Footer";
import { StandardHead } from "../Heads";
import { Navigation } from "../Navigation";
import { Stack } from "@chakra-ui/react";
import { StaggerText } from "../Animation";
import { Description, SubTitle, Title } from "../Text";

export const BasicLayout = ({
  children,
  frontMatter: { footer = true, heading = true, title, date, description },
}) => (
  <>
    <StandardHead />
    <Navigation />
    <CenterContent pt={{ base: "150px", md: "250px" }}>
      {heading && (
        <StaggerText as={Stack} spacing={4}>
          <Title>{title}</Title>
          <SubTitle>{date}</SubTitle>
          <Description>{description}</Description>
        </StaggerText>
      )}
      {children}
      {footer && <Footer />}
    </CenterContent>
  </>
);
