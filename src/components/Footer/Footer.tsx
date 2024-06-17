/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Footer() {
  return (
    <footer css={FooterStyles}>
      <p>
        해당 웹사이트는 단순히 EO 채널을 좋아하는 마음을 담아 만들어졌으며,
        어떠한 수익을 얻을 계획도 없습니다.
      </p>
      <p>
        문의: <a href="mailto:okdal20@gmail.com" style={{textDecoration: 'underline'}}>okdal20@gmail.com</a>
      </p>
    </footer>
  );
}

export default Footer;

const FooterStyles = css`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: var(--bg-tertiary);
  color: rgba(255, 255, 255, 0.6);
  font-weight: 200;
  font-size: 12px;
  gap: 3px;
`;
