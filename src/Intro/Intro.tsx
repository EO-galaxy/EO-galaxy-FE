import { Helmet } from "react-helmet-async";

function Intro() {
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
      console.error("Web Share API is not supported in this browser.");
      alert("링크 공유 기능이 지원되지 않는 브라우저입니다.");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Intro</title>
      </Helmet>
      <main>
        Intro
        <button onClick={() => handleShareLink()}>링크 공유하기</button>
      </main>
    </div>
  );
}

export default Intro;
