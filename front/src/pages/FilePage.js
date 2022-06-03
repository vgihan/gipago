import ocr from "../api/ocr.js";
import translate from "../api/translate.js";
import OutputContainer from "../components/OutputContainer.js";
import Component from "../core/Component.js";
import Container from "../wrappers/Container.js";

class FilePage extends Component {
  setup() {
    this.translated = "";
    this.word = "";
  }
  template() {
    return `<section class="word_page page">
      <ul>
        <li class="input container">
          ${Container({
            title: "File",
            children: `<div class='file_drop_target'>파일을 드래그 하세요</div>
              <input type='file' class='target_file' />`,
            footer: "<button class='translate_btn'>번역하기</button>",
          })}
        </li>
        <li class="output container"></li>
      </ul>
    </section>`;
  }
  setEvent() {
    const $dropTarget = this.$parent.querySelector(".file_drop_target");
    const $targetFile = this.$parent.querySelector(".container_content > input[type=file]");

    $dropTarget.addEventListener("dragover", (e) => {
      e.preventDefault();
      $dropTarget.style.cssText = "border: 1px solid #21dc6d; color: #21dc6d";
    });
    $dropTarget.addEventListener("drop", async (e) => {
      e.preventDefault();
      $dropTarget.style.cssText = "";
      const ocrData = await ocr(e.dataTransfer.files[0]);
      const sentence = ocrData.result.map(({ recognition_words }) => recognition_words).join(" ");
      const translatedData = await translate(sentence, "en", "kr");
      this.translated = translatedData.translated_text[0];
      this.mounted();
    });
  }
  mounted() {
    const $output = this.$parent.querySelector(".output");

    return new OutputContainer($output, { translated: this.translated });
  }
}

export default FilePage;
