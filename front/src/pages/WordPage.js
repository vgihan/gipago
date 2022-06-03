import translate from "../api/translate.js";
import OutputContainer from "../components/OutputContainer.js";
import Component from "../core/Component.js";
import useDebounce from "../util/debounce.js";
import Container from "../wrappers/Container.js";

class WordPage extends Component {
  setup() {
    this.translated = "";
    this.word = "";
  }
  template() {
    return `<section class="word_page page">
      <ul>
        <li class="input container">
          ${Container({
            title: "Word",
            children: "<textarea placeholder='번역할 문장을 입력하세요.'></textarea>",
            footer: "<button class='translate_btn'>번역하기</button>",
          })}
        </li>
        <li class="output container"></li>
      </ul>
    </section>`;
  }
  setEvent() {
    const debounce = useDebounce();

    const $textarea = this.$parent.querySelector(".container_content > textarea");

    $textarea.addEventListener("keyup", (e) => {
      this.word = e.currentTarget.value;
      debounce(async () => {
        if (this.word) {
          const data = await translate(this.word, "en", "kr");
          this.translated = data.translated_text[0];
        } else {
          this.translated = "";
        }
        this.mounted();
      });
    });
  }
  mounted() {
    const $output = this.$parent.querySelector(".output");

    return new OutputContainer($output, { translated: this.translated });
  }
}

export default WordPage;
