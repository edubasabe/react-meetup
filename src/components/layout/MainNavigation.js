import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <Flex bg="pink.800" p="4" as="header">
      <Heading as="h1" fontSize="2xl" color="white">
        React Meetups
      </Heading>
      <Flex as="nav" ml="auto">
        <Flex as="ul">
          <Link to="/" as={NavLink} color="whiteAlpha.800" fontWeight="bold">
            All Meetups
          </Link>
          <Link
            to="/new-meetup"
            as={NavLink}
            mx="4"
            color="whiteAlpha.800"
            fontWeight="bold"
          >
            New Meetup
          </Link>
          <Link
            to="/favorites"
            as={NavLink}
            color="whiteAlpha.800"
            fontWeight="bold"
          >
            Favorites
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
