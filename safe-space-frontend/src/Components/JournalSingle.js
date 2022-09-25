import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { user } from '@auth0/auth0-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Form,
  Input,
  Textarea,
} from '@mantine/core';

import { BACKEND_URL } from '../constants.js';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from './AuthContext';

export default function JournalSingle(props) {
  const Navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();

  // get all to know there is an empty null=> new journal entry =>
  const [journalId, setJournalId] = useState('');
  // const [journalDetails, setJournalDetails] = useState();
  const [indiJournalID, setIndiJournalId] = useState();
  const [indiJournalDueBy, setIndiJournalDueBy] = useState();
  const [indiJournalTemplate, setIndiJournalTemplate] = useState();
  const [indiJournalInput1, setIndiJournalInput1] = useState();
  const [indiJournalInput2, setIndiJournalInput2] = useState();
  const [indiJournalInput3, setIndiJournalInput3] = useState();

  const getSingleJournal = async () => {
    if (journalId) {
      axios.get(`${BACKEND_URL}/journals/single/${journalId}`).then((res) => {
        // setJournalDetails(res.data);
        console.log('single journal list: ', res.data);
        setIndiJournalId(res.data.id);
        setIndiJournalDueBy(res.data.dueBy);
        setIndiJournalTemplate(res.data.journaltemplateId);
        setIndiJournalInput1(res.data.input1);
        setIndiJournalInput2(res.data.input2);
        setIndiJournalInput3(res.data.input3);
      });
    }
  };

  useEffect(() => {
    getSingleJournal();
  }, []);

  const params = useParams();
  if (journalId !== params.journalId) {
    setJournalId(params.journalId);
  }

  return (
    <Container className="Form-body" size="sm" px="xs">
      <Grid justify="center" align="center">
        <Text>Journal {indiJournalID}</Text>
        {/* <Text>Journal {journalDetails.id}</Text> */}
        <Text>Due by: {indiJournalDueBy}</Text>
        <Text>
          {indiJournalTemplate === 1
            ? 'Topics  I want to discuss and goals for the session: '
            : 'Focus Topics and goals for the session:'}
        </Text>
        <Text>{indiJournalInput1}</Text>
        <Text>
          <label>
            {indiJournalTemplate === 1
              ? `How do I feel about these things and how do they affect my life? Do I already see ways to help myself get over them?`
              : `How did my partner react to this discussion? What feelings and insights did he/she express?`}
          </label>
        </Text>
        <Text>{indiJournalInput2}</Text>
        <Text>
          {indiJournalTemplate === 1
            ? `Main insights and takeaways from session: 
  (including possible actions and follow ups)`
            : `My main insights and takeaways from session:
  (including possible actions and follow ups)`}
        </Text>
        <Text>{indiJournalInput3}</Text>
      </Grid>
    </Container>
  );
}
