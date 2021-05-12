import { Heading, Container } from "@chakra-ui/layout";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import PageHeading from "../components/ui/PageHeading";

function NewMeetup() {
  return (
    <section>
      <Container maxW="container.md" pt="4">
        <PageHeading>
          <Heading as="h2">New Meetup</Heading>
        </PageHeading>
        <NewMeetupForm />
      </Container>
    </section>
  );
}
export default NewMeetup;
