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
    <CenterContent pt={{ base: "150px", md: "250px" }} minH="100vh">
      {heading && (title || date || description) && (
        <StaggerText as={Stack} spacing={4}>
          {title && <Title>{title}</Title>}
          {date && <SubTitle>{date}</SubTitle>}
          {description && <Description>{description}</Description>}
        </StaggerText>
      )}
      {children}
      {footer && <Footer />}
    </CenterContent>
  </>
);
