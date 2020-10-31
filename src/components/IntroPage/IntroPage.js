import React from 'react';
import { ScrollSection, ScrollContainer } from 'react-onepage-scroll';
import FirstPage from './FirstPage';
const IntroPage = () => {
  return (
    <>
      <ScrollContainer>
        <ScrollSection pageId={0}>
          <FirstPage />
        </ScrollSection>

        <ScrollSection pageId={1}>2</ScrollSection>

        <ScrollSection pageId={2}>123</ScrollSection>
      </ScrollContainer>
    </>
  );
};

export default IntroPage;
