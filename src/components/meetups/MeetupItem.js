import { Button } from "@chakra-ui/button";
import { Box, ListItem, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Card from "../ui/Card";

export default function MeetupItem(props) {
  return (
    <ListItem>
      <Card>
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
          <Button bg="orange.400" color="white">
            To Favorites
          </Button>
        </Box>
      </Card>
    </ListItem>
  );
}
