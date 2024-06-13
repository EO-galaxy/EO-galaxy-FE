import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { supabase } from "../supabase/supabase";
import { useEffect, useState } from "react";

function Onboarding() {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "ko", name: "Korean" },
  ];

  const [translationData, setTranslationData] = useState<Translation[]>();

  type Translation = {
    id: string;
    title: string;
    content: string;
  };

  async function getTranslation() {
    const { data } = await supabase.from("translations").select("*");

    if (!data) {
      return;
    }

    setTranslationData(data);
  }

  useEffect(() => {
    getTranslation();
  }, []);

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
  }
  return (
    <div>
      <Helmet>
        <title>EO Onboarding</title>
      </Helmet>
      <main>
        Onboarding
        <button onClick={() => handleShareLink()}>링크 공유하기</button>
        <h2>{t("hello")}</h2>
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => i18n.changeLanguage(language.code)}
          >
            {language.name}
          </button>
        ))}
        {translationData?.map((data) => (
          <div key={data.id}>
            <h3>{data.title}</h3>
            <p>{data.content}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Onboarding;
