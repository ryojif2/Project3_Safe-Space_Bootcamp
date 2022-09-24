import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../constants.js';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from './AuthContext.js';
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Group,
  Image,
} from '@mantine/core';

export default function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [photo, setPhoto] = useState('');
  // const [date, setDate] = useState(new Date());

  const [date, setDate] = useState(new Date());

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  let tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  useEffect(() => {
    axios
      .get(`https://api.quotable.io/random`)

      .then((response) => {
        console.log('res', response);
        setQuote(response.data.content);
        setAuthor(response.data.author);
      });

    axios
      .get(
        `https://api.unsplash.com/photos/random/?topics=happy&client_id=${process.env.REACT_APP_APP_ACCESS_KEY}`
      )

      .then((photo) => {
        console.log('res', photo);
        console.log('photos: ', photo.data);
        // setPhoto(photos.data.results[0].urls.regular);
        setPhoto(photo.data.urls.regular);
      });
  }, []);

  return (
    <div>
      <Container className="Content-body" size="xl" px="xs">
        <Card shadow="sm" p="md">
          <Grid grow>
            <Grid.Col span={6}>
              <Card shadow="sm" p="md">
                <Card.Section mt="sm">
                  <Image src={photo} height={250} alt="photo display" />
                </Card.Section>
              </Card>
            </Grid.Col>

            <Grid.Col span={6}>
              <Text weight={400} size="lg" mt="md">
                {quote}
              </Text>
              <Text size="sm" color="dimmed">
                -{author}
              </Text>
              <br />
              <Text weight={400} size="lg" mt="md">
                {date.toLocaleTimeString('en-GB')}
                <br />
                {date.toLocaleDateString('en-GB')}
                <br />
                {day}
              </Text>{' '}
            </Grid.Col>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}