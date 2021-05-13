import { Heading, Container } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import PageHeading from "../components/ui/PageHeading";
import { postMeetup } from "../utils/request";

function NewMeetup() {
  const history = useHistory();
  function handleNewMeetup(meetup) {
    console.log({ meetup });
    postMeetup(meetup).then(() => {
      history.replace("/");
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
