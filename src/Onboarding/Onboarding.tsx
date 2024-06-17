/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Helmet } from "react-helmet-async";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Onboarding() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const titleText = t("onboarding_title");

  useGSAP(() => {
    gsap.fromTo(
      "#title-animation",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []); 

  useGSAP(() => {
    gsap.to("#button", {
      duration: 1,
      scale: 1.2,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <>
      <Helmet>
        <title>EO | 종강 운세</title>
      </Helmet>
      <main css={OnboardingStyles}>
        <h1 id="title-animation" css={TitleStyles}>{titleText}</h1>
        <button
          id="button"
          css={ButtonStyles}
          onClick={() => navigate("/intro")}
        />
      </main>
    </>
  );
}

export default Onboarding;

const OnboardingStyles = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const TitleStyles = css`
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  white-space: pre-line;
  text-align: center;
  line-height: 1.3;
`;

const ButtonStyles = css`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
`;
