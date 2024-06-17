/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { BottomSheet } from "../components/BottomSheet";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { getRandomNumber } from "../util/getRandomNumber";
import VideoItem from "./components/VideoItem";
import { getRandomVideo } from "../util/getRandomVideo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Intro() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.fromTo(
      ".animation",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );
  }, []);

  // 바텀 시트
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const openBottomSheet = () => {
    setBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetOpen(false);
  };

  // 공유하기
  async function handleShareLink() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "EO Galaxy",
          text: "EO Galaxy",
          url: "https://eo-galaxy.vercel.app/",
        });
        console.log("Success share link");
      } catch (error) {
        console.error("Error sharing link", error);
      }
    } else {
      openBottomSheet();
      console.error("Web Share API is not supported in this browser.");
    }
  }

  const handleCopyLink = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      alert("링크가 클립보드에 복사되었습니다.");
      setBottomSheetOpen(false);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // 운세
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const number = getRandomNumber(50, 100);
    setRandomNumber(number);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  // 랜덤 비디오
  const randomVideo = getRandomVideo();

  return (
    <>
      <Helmet>
        <title>Intro</title>
      </Helmet>
      <main css={IntroStyles}>
        <section css={FortuneContainerStyles}>
          <h1 className="animation" css={TitleStyles}>
            {t("intro_fortune_title")}
          </h1>
          {/* 운세 */}
          <CountUp end={Number(randomNumber)} css={FortuneStyles} />
        </section>
        <section css={VideoContainerStyles}>
          <h2 className="animation" css={VideoTitleStyles}>
            {t("intro_video_title")}
          </h2>
          <p className="animation" css={VideoDescriptionStyles}>
            {t("intro_video_description")}
          </p>
          <VideoItem
            className="animation"
            imageSrc={randomVideo.imgSrc}
            description={randomVideo.description}
            link={randomVideo.link}
          />
        </section>
        {/* 공유하기 버튼 */}
        <div css={ButtonContainerStyles}>
          <button
            className="animation"
            onClick={() => handleShareLink()}
            css={ButtonStyles}
          >
            <img src="/svg/link.svg" alt="link" />
            {t("intro_primary_button")}
          </button>
          <p
            className="animation"
            onClick={() => navigate("/home")}
            css={LinkButtonStyles}
          >
            {t("intro_secondary_button")}
          </p>
        </div>
        {/* 바텀시트 */}
        <div>
          <BottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet}>
            <div css={BottomSheetContentStyles}>
              <header css={BottomSheetHeaderStyles}>
                <button onClick={closeBottomSheet}>
                  <img
                    src="/svg/close.svg"
                    alt="close"
                    style={{ width: "15px", height: "15px" }}
                  />
                </button>
              </header>
              <section css={BottomSheetSectionStyles}>
                <h2 css={BottomSheetTitleStyles}>
                  {t("intro_bottomsheet_title")}
                </h2>
                <p>{t("intro_bottomsheet_description")}</p>
                <button css={BottomSheetButtonStyles} onClick={handleCopyLink}>
                  {t("intro_bottomsheet_button")}
                </button>
              </section>
            </div>
          </BottomSheet>
        </div>
      </main>
    </>
  );
}

export default Intro;

const IntroStyles = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 20px;
  padding: 0 20px;
`;

// 운세
const FortuneContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const TitleStyles = css`
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  color: var(--text-primary);
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const FortuneStyles = css`
  font-size: 100px;
  color: var(--text-primary);
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

// 비디오
const VideoContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const VideoTitleStyles = css`
  font-size: 22px;
  font-weight: 800;
  color: var(--text-primary);
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const VideoDescriptionStyles = css`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// 공유하기 버튼
const ButtonContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ButtonStyles = css`
  width: 100%;
  padding: 20px 80px;
  background-color: var(--bg-primary);
  color: var(--text-tertiary);
  font-size: 22px;
  font-weight: 800;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LinkButtonStyles = css`
  color: var(--text-secondary);
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: var(--text-primary);
  }
`;

const BottomSheetContentStyles = css`
  padding: 20px;
`;

const BottomSheetHeaderStyles = css`
  display: flex;
  justify-content: flex-end;
`;

const BottomSheetSectionStyles = css`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const BottomSheetTitleStyles = css`
  font-size: 22px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const BottomSheetButtonStyles = css`
  padding: 10px 20px;
  background-color: var(--bg-primary);
  color: var(--text-tertiary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 5px;
    padding: 10px 10px;
  }
`;
