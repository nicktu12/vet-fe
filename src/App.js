import './App.css';
import Form from './Form';
import Card from './Card'; 

// Iteration 1 - Use fetch to replace dummy data, and render API data

// Iteration 2 - Make form fetch happen, so when an appointment is submitted and POSTed, the page updates without refresh

// Iteration 3 - Make cypress testing happen for initial page display: be sure to check for all dynamic data points of first and last card

// Iteration 4 - Cypress testing for POST - use cypress to fill out the form and submit a new POST request (remember - all network requests much be intercepted!) Validate how the page changes with cypress

// BONUS: Use cypress to test for 500 errors


function App() {
  const dummyData = [
    {id: 1, pet: 'Spot', date: 'April 23', time: '1:00'},
    {id: 2, pet: 'Fido', date: 'April 24', time: '2:00'},
    {id: 3, pet: 'Rex', date: 'April 25', time: '3:00'}
  ];

  return (
    <div className="App">
      <header className="App-header">VetAppointmentScheduler</header>
      <Form />
      {dummyData.map(appointment => <Card key={appointment.id} appointment={appointment} />)}
    </div>
  );
}

export default App;