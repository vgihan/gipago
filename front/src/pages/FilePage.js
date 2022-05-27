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
      <div class="input container">
        ${Container({
          title: "Word",
          children: "<video class='web_cam' autoplay />",
          footer: "<button class='translate_btn'>번역하기</button>",
        })}
      </div>
      <div class="output container"></div>
    </section>`;
  }
  setEvent() {}
  mounted() {
    const $output = this.$parent.querySelector(".output");

    return new OutputContainer($output, { translated: this.translated });
  }
}

export default FilePage;
