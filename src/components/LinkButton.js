import { Button } from "@chakra-ui/react";
import Link from "./Link";

const LinkButton = ({ href, children }) => (
  <Link as={Button} href={href} _hover={{ textDecoration: "none" }}>
    {children}
  </Link>
);

export default LinkButton;
