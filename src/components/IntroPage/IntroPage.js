import React, { Fragment } from 'react';
import { ScrollSection, ScrollContainer } from 'react-onepage-scroll';
import FirstPage from './FirstPage';
import { useInView } from 'react-intersection-observer';
import track, { useTracking } from 'react-tracking';
const IntroPage = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.21,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  console.log(inView);
  return (
    <>
      <ScrollContainer>
        <ScrollSection pageId={0}>
          <FirstPage inViewEle={inView} refEl={ref} />
        </ScrollSection>

        <ScrollSection pageId={1}>2</ScrollSection>

        <ScrollSection pageId={2}>123</ScrollSection>
      </ScrollContainer>
    </>
  );
};

export default IntroPage;
