import { Heading, Container } from "@chakra-ui/layout";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import PageHeading from "../components/ui/PageHeading";

function NewMeetup() {
  function handleNewMeetup(meetup) {
    console.log({ meetup });
    fetch(
      "https://react-meetup-fe77a-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      console.log({ response });
    });
  }

  return (
    <section>
      <Container maxW="container.md" pt="4">
        <PageHeading>
          <Heading as="h2">New Meetup</Heading>
        </PageHeading>
        <NewMeetupForm onAddMeetup={handleNewMeetup} />
      </Container>
    </section>
  );
}
export default NewMeetup;
