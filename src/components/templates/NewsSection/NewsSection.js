import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import {
  NewsWrapper,
  NewsSectionHeader,
  ArticleWrapper,
  TitleWrapper,
  ContentWrapper,
} from './NewsSection.styles';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech news',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the in Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a",
    image: null,
  },
  {
    title: 'New computers at school2 la lalallalal',
    category: 'Tech news',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the in Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a",
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school3',
    category: 'Tech news',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the in Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a",
    image: null,
  },
];

const NewsSection = () => {
  return (
    <NewsWrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {data.map(({ title, category, content, image }) => {
        return (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        );
      })}
    </NewsWrapper>
  );
};

export default NewsSection;
