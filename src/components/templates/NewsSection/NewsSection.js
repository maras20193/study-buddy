import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Button } from 'components/atoms/Button/Button';
import {
  NewsWrapper,
  NewsSectionHeader,
  ArticleWrapper,
  TitleWrapper,
  ContentWrapper,
} from './NewsSection.styles';
import StyledLoader from 'components/atoms/Loader/Loader';

export const query = `
{
  allArticles {
    id
    title
    category
    content
    image {
      url
    }
  }
}
`;

const API = 'd0fdd62312bf29187e1c59a7c9af10';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load articles for you`);
      });
  }, []);

  return (
    <NewsWrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image }) => {
          return (
            <ArticleWrapper key={title}>
              <TitleWrapper>
                <h3>{title}</h3>
                <p>{category}</p>
              </TitleWrapper>
              <ContentWrapper>
                <p>{content}</p>
                {image ? <img src={image.url} alt="article" /> : null}
              </ContentWrapper>
              <Button isBig>Read more</Button>
            </ArticleWrapper>
          );
        })
      ) : error ? (
        <NewsSectionHeader>{error}</NewsSectionHeader>
      ) : (
        <StyledLoader />
      )}
    </NewsWrapper>
  );
};

export default NewsSection;
