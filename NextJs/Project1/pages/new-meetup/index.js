import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetUpHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeeetup={addMeetUpHandler}></NewMeetupForm>;
}
export default NewMeetupPage;
