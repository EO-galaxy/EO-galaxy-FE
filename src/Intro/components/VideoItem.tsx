/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface VideoItemProps {
  className: string;
  imageSrc: string;
  description: string;
  link: string;
}

function VideoItem({ imageSrc, description, link }: VideoItemProps) {
  return (
    <div
      css={VideoItemStyles}
      onClick={() =>
        window.open(`${link}`, "_blank")
      }
    >
      <img css={ImageStyles} src={imageSrc} alt="play" />
      <p css={VideoDescriptionStyles}>
        {description}
      </p>
    </div>
  );
}

export default VideoItem;

const VideoItemStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

const ImageStyles = css`
  width: 360px;
  height: 200px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 240px;
    height: 140px;
  }
`;

const VideoDescriptionStyles = css`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: var(--text-primary);
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
