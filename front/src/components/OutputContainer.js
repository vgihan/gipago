import Component from "../core/Component.js";
import Container from "../wrappers/Container.js";

class OutputContainer extends Component {
  template() {
    return Container({
      title: "Output",
      children: `<p class='translated'>${this.props.translated}</p>`,
      footer: "",
    });
  }
}

export default OutputContainer;
