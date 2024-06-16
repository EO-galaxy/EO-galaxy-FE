/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { css } from "@emotion/react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <>
      <div css={OverlayStyles(isOpen)} onClick={onClose} />
      <div css={BottomSheeetStyles(isOpen)}>{children}</div>
    </>
  );
};

export default BottomSheet;

const OverlayStyles = (isOpen: boolean) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${isOpen ? "block" : "none"};
  z-index: 999;
`;

const BottomSheeetStyles = (isOpen: boolean) => css`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${isOpen ? "50px" : "-100%"};
  width: 375px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transition: bottom 0.3s ease-in-out;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 355px;
  }
`;
