import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';

function App() {

  // const [clients, setClients] = useState(false);
  // useEffect(() => {
  //   getClient();
  // }, []);
  // function getClient() {
  //   fetch('http://localhost:3001')
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       setClients(data);
  //     });
  // }
  // function createClient() {
  //   let surname = prompt('Enter surname name');
  //   let name = prompt('Enter client name');
  //   let patronymic = prompt('Enter patronymic email');
  //   let email = prompt('Enter client email');
  //   let password = prompt('Enter password email');
  //   fetch('http://localhost:3001/clients', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ surname, name, patronymic, email, password }),
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //       getClient();
  //     });
  // }
  // function deleteClient() {
  //   let id = prompt('Enter client id');
  //   fetch(`http://localhost:3001/clients/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //       getClient();
  //     });
  // }

  return (
    <div>
      {/* {clients ? clients : 'There is no client data available'}
      <br/>
      <button onclick="{createClient}">Add client</button>
      <br/>
      <button onclick="{deleteClient}">Delete client</button> */}
      <Header />
    </div>
  );
}

export default App;