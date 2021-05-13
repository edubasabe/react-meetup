import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/layout";
import { Heading, Container } from "@chakra-ui/layout";
import MeetupList from "../components/meetups/MeetupList";
import PageHeading from "../components/ui/PageHeading";
import { getMeetups } from "../utils/request";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getMeetups().then((response) => {
      const data = Object.entries(response);
      const meetupsList = data.map((item) => ({ id: item[0], ...item[1] }));

      setMeetups(meetupsList);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <Container maxW="container.xl">
        <Text mt="6">Loading...</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl">
      <PageHeading>
        <Heading as="h2">All Meetups</Heading>
      </PageHeading>
      <MeetupList meetups={meetups} />
    </Container>
  );
}

export default AllMeetups;
