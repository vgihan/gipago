<h1 align="center">✈GIPAGO✈</h1>

> kakao OCR API와 kakao Translate API를 활용하여,<br/>
>
> 🥇 문장을 번역하고<br/>
> 🥈 영어가 적힌 이미지 파일을 번역하고<br/>
> 🥉 웹캠을 통한 캡쳐를 번역합니다<br/>

## 사용된 기술

HTML, CSS, 순수 JavaScript만을 이용한 프로젝트입니다. kakao OCR API와 kakao Translate API를 이용하였습니다.

## 배포 링크

[GIPAGO](https://gipago.kro.kr/)

## 실행 방법

```
git clone https://github.com/vgihan/gipago.git
cd gipago
yarn
yarn start
```

(localhost에서 실행하려면 kakao api key를 발급받아 src 폴더 아래에 아래와 같은 apiKey.js 파일이 필요합니다.)

```javascript
const API_KEY = "your api key";

export default API_KEY;
```

## 실행 화면

<br/>

**파일 번역**

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/49841765/171834174-928a6f12-9324-485c-819d-70cd0561ffb4.gif)

- 화면에는 보이지 않지만, 영어가 쓰여진 이미지 파일을 드래그하여 업로드 합니다.
- 업로드 된 이미지는 ocr api와 translate api의 data로 옮겨져 번역됩니다.
- 번역된 데이터는 오른쪽 output에 출력됩니다.
  <br/>

**문자 번역**

![image](https://user-images.githubusercontent.com/49841765/171834529-63078e39-9c71-4895-b790-cb3f169fb655.png)

- 왼쪽 Word textarea에 번역할 영어를 입력합니다.
- 입력된 문장은 translate api를 거쳐 오른쪽 output에 출력됩니다.
  <br/>

**사진 번역**

![image](https://user-images.githubusercontent.com/49841765/171835012-daab7b08-7e57-4971-ad9b-ee5ad878bd82.png)

- 카메라 액세스에 동의 하면, 왼쪽 video 박스에 웹캠이 출력됩니다.
- 웹캠에 번역할 영어를 비추고, 번역하기 버튼을 눌러 웹캠을 캡쳐합니다.
- 캡쳐된 웹캠은 ocr api와 translate api를 거쳐 문장을 번역하고, 오른쪽 output 박스에 번역된 내용을 출력합니다.
