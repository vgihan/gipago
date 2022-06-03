import API_KEY from "../apiKey.js";

const translate = async (word, src, target) => {
  try {
    const res = await fetch(
      `https://dapi.kakao.com/v2/translation/translate?query=${word}&src_lang=${src}&target_lang=${target}`,
      {
        headers: {
          Authorization: `KakaoAK ${API_KEY}`,
        },
      }
    );
    return res.json();
  } catch (e) {
    console.error(e);
  }
};

export default translate;
