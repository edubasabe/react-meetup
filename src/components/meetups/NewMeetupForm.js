import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import Card from "../ui/Card";

export default function NewMeetupForm() {
  return (
    <div>
      <form>
        <Card mx="auto" p="5" border="1px" borderColor="gray.200">
          <FormControl id="title" mb="4">
            <FormLabel>Meetup title</FormLabel>
            <Input type="text" placeholder="Enter the meetup title" />
          </FormControl>

          <FormControl id="image">
            <FormLabel>Meetup image</FormLabel>
            <Input
              type="url"
              required
              placeholder="Enter the meetup image url"
            />
          </FormControl>

          <FormControl id="address" mb="4">
            <FormLabel>Meetup address</FormLabel>
            <Input type="text" placeholder="Enter the meetup address" />
          </FormControl>

          <FormControl id="description" mb="4">
            <FormLabel>Meetup description</FormLabel>
            <Textarea placeholder="Enter a meetup description" required />
          </FormControl>
          <Flex justify="flex-end">
            <Button colorScheme="pink">Add Meetup</Button>
          </Flex>
        </Card>
      </form>
    </div>
  );
}
