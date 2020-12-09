import React, { useEffect } from 'react';
import example from 'assets/example.png';
import './FirstPage.scss';
import FadeIn from 'react-fade-in';
import { useDencrypt } from 'use-dencrypt-effect';
import ScollAnimation from 'react-animate-on-scroll';

const values = ['바인드', 'B1ND'];
const FirstPage = ({ inViewEle, refEl }) => {
  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  });
  console.log(inViewEle);
  return (
    <div className="FirstPage" ref={refEl}>
      <div className="FirstPage-TextWrap">
        <div className="test">
          <div className="FirstPage-TextWrap-SubTitle">
            학교와 학생을 잇다, 바인드
          </div>
          <div className="FirstPage-TextWrap-MainTitle">
            <div className="FirstPage-TextWrap-MainTitle-Intro">
              <span style={{ color: '#0066ba' }}>
                {result ? result : '도담도담'}
              </span>{' '}
              서비스 소개
            </div>
            <div>내용 들어감</div>
            <div>도담도담, 마인</div>
          </div>
          <div className="FirstPage-TextWrap-Bra">
            간단한 소개와 텍스트들과 내용들 서비스에 대한 어쩌고 저쩌고어ㅉ
            간단한 소개와 텍스트들과 내용들 서비스에 대한 어쩌고 저쩌고어ㅉ
          </div>
        </div>
      </div>
      {inViewEle ? (
        <FadeIn transitionDuration={1500} delay={800}>
          <div className="FirstPage-ImgWrap">
            <img
              src={example}
              alt=""
              style={{ width: '800px', height: '1145px' }}
            />
          </div>
        </FadeIn>
      ) : null}
    </div>
  );
};

export default FirstPage;
