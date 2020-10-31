import React, { useEffect } from 'react';
import example from 'assets/example.png';
import './FirstPage.scss';
import FadeIn from 'react-fade-in';
import { useDencrypt } from 'use-dencrypt-effect';

const values = ['aaaa', 'bbbb'];
const FirstPage = () => {
  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  });

  return (
    <div className="FirstPage">
      <div className="FirstPage-TextWrap">
        <div className="test">
          <div className="FirstPage-TextWrap-SubTitle">lorem1-uniforms</div>
          <div className="FirstPage-TextWrap-MainTitle">
            <div className="FirstPage-TextWrap-MainTitle-Intro">
              <span style={{ color: '#0066ba' }}>
                {result ? result : 'asdas'}
              </span>{' '}
              서비스 소개
            </div>
            <div>내용 들어감</div>
            <div>EXMAP !,asesaes</div>
          </div>
          <div className="FirstPage-TextWrap-Bra">
            간단한 소개와 텍스트들과 내용들 서비스에 대한 어쩌고 저쩌고어ㅉ
            간단한 소개와 텍스트들과 내용들 서비스에 대한 어쩌고 저쩌고어ㅉ
          </div>
        </div>
      </div>
      <FadeIn delay={1000}>
        <div className="FirstPage-ImgWrap">
          <img
            src={example}
            alt=""
            style={{ width: '800px', height: '1145px' }}
          />
        </div>
      </FadeIn>
    </div>
  );
};

export default FirstPage;
