import { Heading, Container, Text, HStack } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { LightBulbIcon } from "@heroicons/react/outline";
import PageHeading from "../components/ui/PageHeading";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <HStack spacing="3" mt="4" bg="blue.100" p="4" rounded="base">
        <Icon as={LightBulbIcon} fontSize="2xl" h="10" />
        <Text fontWeight="medium" marginEnd="2">
          You got not favorites yet. <b>Start adding some?</b>
        </Text>
      </HStack>
    );
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <Container maxW="container.xl">
      <PageHeading>
        <Heading as="h2">My Favorites</Heading>
        {content}
      </PageHeading>
    </Container>
  );
}
export default Favorites;
