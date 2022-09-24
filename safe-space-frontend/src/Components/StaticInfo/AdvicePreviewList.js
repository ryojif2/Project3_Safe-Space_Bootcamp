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

export default function AdvicePreviewList() {
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
      // `https://api.unsplash.com/search/photos/?query=mentalhealth&client_id={APP_ACCESS_KEY}`
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

  const ArticlePreviews = allArticles.map((article, index) => (
    <Link to={`/advice/preview/${article.id}`} key={article.id}>
      <AdvicePreview data={article} />
    </Link>
  ));

  return (
    <div className="Page-body">
      <NavBar />
      {ArticlePreviews}
      <Footer />
    </div>
  );
}