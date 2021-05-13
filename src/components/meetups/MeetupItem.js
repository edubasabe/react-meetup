import { useContext } from "react";
import { Button } from "@chakra-ui/button";
import { Box, ListItem, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

export default function MeetupItem(props) {
  const favoritesContext = useContext(FavoritesContext);
  const itemIsFavorite = favoritesContext.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(props.id);
    } else {
      favoritesContext.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <ListItem>
      <Card m="8" maxW="xs">
        <Box>
          <Image src={props.image} alt={props.title} />
        </Box>
        <Box p="4">
          <Heading as="h3" fontSize="2xl">
            {props.title}
          </Heading>
          <Text as="address">{props.address}</Text>
          <Text>{props.description}</Text>
        </Box>
        <Box px="4" pb="4">
          <Button onClick={toggleFavoritesStatusHandler} colorScheme="orange">
            {itemIsFavorite ? "Remove from favorites" : "To Favorites"}
          </Button>
        </Box>
      </Card>
    </ListItem>
  );
}
