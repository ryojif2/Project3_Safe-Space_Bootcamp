import NavBar from '../NavBar';
import Footer from '../Footer';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BACKEND_URL } from '../../constants.js';
import { useAuth0 } from '@auth0/auth0-react';
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
  Image,
} from '@mantine/core';
import { parseWithOptions } from 'date-fns/esm/fp';
import AdvicePreview from './AdvicePreview';
import AdvicePreviewList from './AdvicePreviewList';

export default function Advice() {
  const [allArticles, setAllArticles] = useState('');
  const [photo, setPhoto] = useState('');

  const getAllArticles = async () => {
    let response = await axios.get(`${BACKEND_URL}/articles/`);
    console.log('articles: ', response);
    console.log('articles.data: ', response.data);
    setAllArticles(response.data);
  };

  const getPhotos = async () => {
    let photos = await axios.get(
      `https://api.unsplash.com/photos/random/?topics=mentalhealth&client_id=${process.env.REACT_APP_APP_ACCESS_KEY}`
      
    );
    // console.log('photos: ', photos.data.results);
    console.log('photos: ', photos.data);
    // setPhoto(photos.data.results[0].urls.regular);
    setPhoto(photos.data.urls.regular);
  };

  useEffect(() => {
    getPhotos();
    getAllArticles();
  }, []);

  return (
    <div className="Page-body">
      <NavBar />
      <div className="Content-container">
        <Container className="Content-body" size="md" px="xs">
          <Card withBorder shadow="sm" radius="md">
            {allArticles && allArticles.length
              ? allArticles.map((article, index) => (
                  <div className="Articles-single" key={article.id}>
                    {' '}
                    Article #{article.id}{' '}
                    <Title size={20}>{article.title}</Title>
                    <Title size={12}>
                      Written by: {article.author}
                    </Title> <br /> <Text> {article.content}</Text>
                    <br />
                  </div>
                ))
              : 'no articles listed'}
          </Card>
          <br />
          <Card withBorder shadow="sm" radius="md">
            <Card.Section mt="sm">
              <Image src={photo} height={400} alt="article photo" />
            </Card.Section>
          </Card>
          <br />
          <br />
        </Container>
      </div>
     
      <Footer />
    </div>
  );
}
