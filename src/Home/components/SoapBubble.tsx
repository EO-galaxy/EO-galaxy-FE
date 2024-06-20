/** @jsxImportSource @emotion/react */

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

interface SoapBubbleProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SoapBubble: React.FC<SoapBubbleProps> = ({
  className,
  style,
  onClick,
}) => {
  const { t } = useTranslation();
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [isBubbleText, setIsBubbleText] = useState<boolean>(true);

  const handleClick = () => {
    if (bubbleRef.current) {
      gsap.to(bubbleRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          if (bubbleRef.current) {
            setIsBubbleText(!isBubbleText);
            const newText = isBubbleText ? t("bubble_yes") : t("bubble_no");
            bubbleRef.current.innerText = newText;
            const randomColor = getRandomColor();
            bubbleRef.current.style.backgroundColor = randomColor;
            gsap.to(bubbleRef.current, { scale: 1, opacity: 1, duration: 0.3 });
          }
        },
      });
    }
    if (onClick) {
      onClick();
    }
  };

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.7)`;
  };

  return (
    <div
      ref={bubbleRef}
      className={className}
      style={{
        ...style,
        fontFamily: "Ownglyph_ryurue-Rg",
        width: "100px",
        height: "100px",
        backgroundColor: "rgba(179, 224, 255, 0.7)",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "1.5rem",
        fontWeight: "bold",
        userSelect: "none",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out, background-color 0.3s ease",
      }}
      onClick={handleClick}
    >
      {isBubbleText ? t("bubble_yes") : t("bubble_no")}
    </div>
  );
};

export default SoapBubble;
