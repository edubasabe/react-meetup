import { Heading, Container } from "@chakra-ui/layout";
import PageHeading from "../components/ui/PageHeading";

function Favorites() {
  return (
    <Container maxW="container.xl">
      <PageHeading>
        <Heading as="h2">Favorites</Heading>
      </PageHeading>
    </Container>
  );
}
export default Favorites;
