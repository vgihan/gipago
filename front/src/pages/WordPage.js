import Component from "../core/Component.js";
import Container from "../wrappers/Container.js";

class WordPage extends Component {
  template() {
    return `<section class="word_page page">
      ${Container({
        title: "Word",
        children: "<textarea></textarea>",
        footer: "<button class='translate_btn'>번역하기</button>",
      })}
      ${Container({
        title: "Output",
        children: "<p class='translated'></p>",
        footer: "",
      })}
    </section>`;
  }
}

export default WordPage;
