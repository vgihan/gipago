import Component from "../core/Component.js";
import FilePage from "../pages/FilePage.js";
import PicturePage from "../pages/PicturePage.js";
import WordPage from "../pages/WordPage.js";

class Router extends Component {
  template() {
    return "";
  }
  mounted() {
    const { path } = this.props;

    if (path === "/") return new WordPage(this.$parent);
    if (path === "/picture") return new PicturePage(this.$parent);
    if (path === "/file") return new FilePage(this.$parent);
  }
}

export default Router;
