export function getMeetups() {
  /* When using firebase
  return fetch(
    "https://react-meetup-fe77a-default-rtdb.firebaseio.com/meetups.json"
  ).then((res) => res.json());
  */
  const meetups = localStorage.getItem("meetups");
  if (!meetups) {    
    const initialMeetups = [
      {
        id: "a1",
        image: "https://source.unsplash.com/wn7dOzUh3Rs/320x280",
        title: "Initial Meetup",
        description: "This is the first meetup for the app"
      }
    ];
    localStorage.setItem("meetups", JSON.stringify(initialMeetups));
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(initialMeetups);
      }, 2000);
    }); 
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse(meetups));
    }, 2000);
  }); 
}

export function postMeetup(meetup) {
/* When using firebase  
  return fetch(
    "https://react-meetup-fe77a-default-rtdb.firebaseio.com/meetups.json",
    {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ); */
  const meetups = JSON.parse(localStorage.getItem("meetups"));
  meetups.push(meetup);
  localStorage.setItem("meetups", JSON.stringify(meetups));
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(meetups);
    }, 3000)
  });
}
