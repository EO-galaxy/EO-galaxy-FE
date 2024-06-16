/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BottomSheet } from "../BottomSheet";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "ko", name: "한국어" },
  ];

  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const openBottomSheet = () => {
    setBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetOpen(false);
  };
  return (
    <>
      <div css={HeaderStyles}>
        <img
          src="/logo.png"
          alt="logo"
          style={{ width: "28px", height: "28px" }}
        />
        <img
          onClick={openBottomSheet}
          src="/svg/language.svg"
          alt="language"
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
        />
      </div>
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
            {languages.map((language) => (
              <button
                key={language.code}
                css={LanguageButtonStyles}
                onClick={() => {
                  i18n.changeLanguage(language.code);
                  closeBottomSheet();
                }}
              >
                {language.name}
              </button>
            ))}
          </section>
        </div>
      </BottomSheet>
    </>
  );
}

export default Header;

const HeaderStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 130px;
  height: 66.2px;
  width: 100vw;
  background-color: var(--bg-secondary);

  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    padding: 0px 15px;
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
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const LanguageButtonStyles = css`
  width: 100%;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  :hover {
    color: var(--bg-primary);
    font-weight: 700;
  }
`;
