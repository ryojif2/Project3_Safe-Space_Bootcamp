import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { BACKEND_URL } from '../constants.js';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from './AuthContext.js';
import { Container } from '@mantine/core';

export default function ClientProfile() {
  const [clientId, setClientId] = useState();
  const [clientDetails, setClientDetails] = useState({});

  const navigate = useNavigate();

  const { user } = useAuth0();
  const { clientInfo, currentUser, updateTemplate } = useAuth();

  useEffect(() => {
    console.log(`in effect`);
    console.log(user);

    axios.get(`${BACKEND_URL}/clients/${user.email}`).then((response) => {
      setClientDetails(response.data);
    });

    console.log(clientDetails);
  }, [user]);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  // const setUser = () => {
  //   setCurrentUser(clientInfo);
  // };

  // //essentially needed to update specfic client.
  // useEffect(() => {
  //   setUser();
  // }, [currentUser]);

  // useEffect(() => {
  //   console.log("inEffect");
  //   // If there is a patientId, retrieve the listing data
  //   console.log(user.email);
  //   axios.get(`${BACKEND_URL}/clients/${user.email}`).then((response) => {
  //     setClientDetails(response.data);
  //   });

  //   // Only run this effect on change to patientId
  // }, []);

  // const params = useParams();
  // if (patientId !== params.patientId) {
  //   setPatientId(params.patientId);
  // }

  // Store a new JSX element for each property in listing details
  // const listingDetails = [];
  // if (listing) {
  //   for (const key in listing) {
  //     listingDetails.push(
  //       <Card.Text key={key}>{`${key}: ${listing[key]}`}</Card.Text>
  //     );
  //   }
  // }

  return (
    <div>
      <h2>Hello World</h2>
      <img
        src={`${clientDetails.photoLink}`}
        alt={`${clientDetails.photoLink}`}
      />
      <h4>
        Patient Name: {clientDetails.firstName}
        {clientDetails.lastName}
      </h4>

      <Container>
        <p>Age:{clientDetails.ageClient}</p>
        <p>Gender:{clientDetails.gender}</p>
        <p>Phone Number:{clientDetails.phoneNumber}</p>
        <p>Email:{clientDetails.email}</p>
        <p>Marital Status:{clientDetails.maritalStatus}</p>
        <br />
        {/*Information from memo?*/}
      </Container>

      <button onClick={(e) => navigate(-1)}>back</button>
    </div>
  );
}