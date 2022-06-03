import API_KEY from "../apiKey.js";

const ocr = async (image) => {
  try {
    const data = new FormData();
    data.append("image", image);
    const res = await fetch("https://dapi.kakao.com/v2/vision/text/ocr", {
      method: "POST",
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
      body: data,
    });
    return res.json();
  } catch (e) {
    console.error(e);
  }
};

export default ocr;
