import React, { useEffect, useMemo, useState, useCallback } from 'react';
import './ScrollEffect.scss';
import _, { throttle } from 'underscore';
const ScrollEffect = () => {
  let lastScrollTop = 0;
  const [aa, bb] = useState(0);

  const calcScroll = useCallback(() => {
    const sectionElement = document.getElementsByTagName('section');
    let st = 0;

    document.addEventListener(
      'scroll',
      () => {
        console.log(lastScrollTop);
        console.log(aa);
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          console.log('down'); //++
          if (st >= sectionElement.length) {
            return;
          } else {
            sectionElement[st].scrollIntoView({
              behavior: 'smooth',
            });
            st++;
          }
          bb(aa);

          console.log(st);
        } else {
          if (st < sectionElement.length) {
            st--;
            sectionElement[st].scrollIntoView({
              behavior: 'smooth',
            });
          }
          console.log(st);
          console.log('up'); // --
        }
        // lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      },
      true
    );
    console.log(document.scrollingElement.scrollTop);
  }, [aa, lastScrollTop]);
  useEffect(() => {
    calcScroll();
  }, [calcScroll]);

  return (
    <>
      <section>
        <div className="one"></div>
      </section>
      <section>
        <div className="two"></div>
      </section>
      <section>
        <div className="three"></div>
      </section>
      <section>
        <div className="four"></div>
      </section>
      <section>
        <div className="five"></div>
      </section>
    </>
  );
};

export default ScrollEffect;
