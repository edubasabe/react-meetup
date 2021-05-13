export function getMeetups() {
  return fetch(
    "https://react-meetup-fe77a-default-rtdb.firebaseio.com/meetups.json"
  ).then((res) => res.json());
}

export function postMeetup(meetup) {
  return fetch(
    "https://react-meetup-fe77a-default-rtdb.firebaseio.com/meetups.json",
    {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
