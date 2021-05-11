import { Heading, Container } from "@chakra-ui/layout";
import MeetupList from "../components/meetups/MeetupList";
import PageHeading from "../components/ui/PageHeading";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "https://via.placeholder.com/640x480/92c952",
    address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    id: "m2",
    title: "This is the second meetup",
    image: "https://via.placeholder.com/640x480/92c952",
    address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];
function AllMeetups() {
  return (
    <Container maxW="container.xl">
      <PageHeading>
        <Heading as="h2">All Meetups</Heading>
      </PageHeading>
      <MeetupList meetups={DUMMY_DATA} />
    </Container>
  );
}

export default AllMeetups;
