/** @jsxImportSource @emotion/react */
import { Helmet } from "react-helmet-async";
import SoapBubble from "./components/SoapBubble";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
import Carousel from "./components/Carousel";

import useIsMobile from "../hook/useIsMobile";
import { getRandomNumber } from "../util/getRandomNumber";

function Home() {
  const isMobile = useIsMobile();
  const carouselSectionRef = useRef<HTMLElement>(null);
  const { t, i18n } = useTranslation();
  const [bubbleSizes, setBubbleSizes] = useState<number[]>([]);

  useEffect(() => {
    const sizes = Array.from({ length: 10 }).map(() => Math.random() * 80 + 20);
    setBubbleSizes(sizes);

    const bubbles = document.querySelectorAll(".floating-bubble");
    bubbles.forEach((bubble) => {
      animateFloatingBubble(bubble);
    });
  }, []);

  const animateFloatingBubble = (bubble: Element) => {
    const delay = Math.random() * -10;

    gsap.to(bubble, {
      y: "-=50",
      repeat: -1,
      yoyo: true,
      duration: Math.random() * 2 + 1,
      delay: delay,
      ease: "sine.inOut",
    });
  };

  let bubbleNumber;
  if (isMobile) {
    bubbleNumber = 15;
  } else {
    bubbleNumber = 40;
  }

  const floatingBubbles = Array.from({ length: bubbleNumber }).map(
    (_, index) => {
      const size = bubbleSizes[index] || 40;
      let left, top;
      if (isMobile) {
        left = getRandomNumber(10, 60); // 모바일에서는 10에서 60 사이의 값
        top = getRandomNumber(20, 80);
      } else {
        left = getRandomNumber(10, 90); // 데스크탑에서는 10에서 90 사이의 값
        top = getRandomNumber(20, 80);
      }
      return (
        <SoapBubble
          key={index}
          className="floating-bubble"
          style={{
            position: "absolute",
            left: `${left}vw`, // 10 ~ 90
            top: `${top}vh`, // 20 ~ 80
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      );
    },
  );

  const handleScrollToCarousel = () => {
    carouselSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 언어에 따라 다른 dangerouslySetInnerHTML 설정
  const getCarouselTitleHTML = () => {
    if (i18n.language.startsWith("en")) {
      // 영어일 경우
      return {
        __html: t("home_carousel_title").replace(".", ".<br />"),
      };
    } else {
      // 한국어일 경우
      return {
        __html: t("home_carousel_title").replace(
          "힘들어 하지 말고",
          "힘들어 하지 말고<br />",
        ),
      };
    }
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <main css={HomeStyles}>
        {/* 비눗방울 화면 */}
        <section css={bubbleSectionStyles}>
          <h1 css={TitleStyles}>{t("home_title")}</h1>
          <p css={SubTitleStyles}>{t("home_subtitle")}</p>
          {floatingBubbles}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={handleScrollToCarousel}>
              <img
                src="/svg/scroll.svg"
                alt="scroll"
                style={{ width: 100, height: 100 }}
              />
            </button>
          </div>
        </section>
        {/* 캐러셀 화면 */}
        <section css={carouselSectionStyles} ref={carouselSectionRef}>
          <h1
            css={carouselTitleStyles}
            dangerouslySetInnerHTML={getCarouselTitleHTML()}
          />
          <Carousel />
        </section>
      </main>
    </>
  );
}

export default Home;

const HomeStyles = css`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  margin-top: 200px;
  background-color: var(--bg-secondary);
`;

const bubbleSectionStyles = css`
  margin-top: 200px;
  overflow: hidden;
`;

const TitleStyles = css`
  font-size: 32px;
  font-weight: bold;
  color: var(--text-primary);
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const SubTitleStyles = css`
  font-size: 24px;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const carouselSectionStyles = css`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin: 50px 0px 100px 0px;
`;

const carouselTitleStyles = css`
  font-size: 32px;
  font-weight: bold;
  color: var(--text-primary);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
