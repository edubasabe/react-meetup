import { useContext } from "react";
import { ListItem } from "@chakra-ui/layout";
import { Badge } from "@chakra-ui/layout";
import {
  Container,
  Flex,
  Heading,
  Link,
  UnorderedList,
} from "@chakra-ui/layout";
import { NavLink } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <Flex bg="pink.800" p="4" as="header">
      <Container maxW="container.xl" d="flex">
        <Heading as="h1" fontSize="2xl" color="white">
          React Meetups
        </Heading>
        <Flex as="nav" ml="auto">
          <UnorderedList d="flex" styleType="none">
            <ListItem>
              <Link
                to="/"
                as={NavLink}
                color="whiteAlpha.800"
                fontWeight="bold"
              >
                All Meetups
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/new-meetup"
                as={NavLink}
                mx="4"
                color="whiteAlpha.800"
                fontWeight="bold"
              >
                New Meetup
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/favorites"
                as={NavLink}
                color="whiteAlpha.800"
                fontWeight="bold"
              >
                Favorites
                <Badge ml="2" colorScheme="pink" borderRadius="md">
                  {favoritesCtx.totalFavorites}
                </Badge>
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Container>
    </Flex>
  );
}
