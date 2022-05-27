import ocr from "../api/ocr.js";
import translate from "../api/translate.js";
import OutputContainer from "../components/OutputContainer.js";
import Component from "../core/Component.js";
import Container from "../wrappers/Container.js";

class PicturePage extends Component {
  setup() {
    this.translated = "";
    this.stream = null;
  }
  template() {
    return `<section class="word_page page">
      <div class="input container">
        ${Container({
          title: "Video",
          children: "<video class='web_cam' autoplay />",
          footer: "<button class='translate_btn'>번역하기</button>",
        })}
      </div>
      <div class="output container"></div>
    </section>`;
  }
  setEvent() {
    const $translateButton = this.$parent.querySelector(".translate_btn");

    const getOcr = async () => {
      if (!this.stream) return;
      const track = this.stream.getTracks()[0];
      const image = new ImageCapture(track);
      const capture = await image.takePhoto();
      return await ocr(capture);
    };
    const handleTranslate = async () => {
      const ocrData = await getOcr();
      const sentence = ocrData.result
        .map(({ recognition_words }) => recognition_words)
        .join(" ");
      const translatedData = await translate(sentence, "en", "kr");
      this.translated = translatedData.translated_text[0];
      this.mounted();
    };
    $translateButton.addEventListener("click", handleTranslate);
    $translateButton.addEventListener("keyup", (e) => {
      if (e.key !== "Enter") return;
      handleTranslate();
    });
  }
  mounted() {
    const $output = this.$parent.querySelector(".output");

    return new OutputContainer($output, { translated: this.translated });
  }
  componentDidMount() {
    const openCam = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 600, height: 280 },
      });
      const $video = this.$parent.querySelector(".web_cam");

      $video.srcObject = stream;
      this.stream = stream;
    };
    openCam();
  }
}

export default PicturePage;
