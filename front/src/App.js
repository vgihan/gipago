import Router from "./components/Router.js";
import Component from "./core/Component.js";

class App extends Component {
  template() {
    return `<header>
      <div class="logo">
        <a href=""><span class="ubuntu">GIPAGO</span></a>
      </div>
      <nav>
        <a href="/picture" class="picture_link gowun">사진 번역</a>
        <a href="/file" class="file_link gowun">파일 번역</a>
        <a href="/" class="word_link gowun">문자 번역</a>
      </nav>
    </header>
    <article></article>
    <footer>
      <a href="https://github.com/vgihan">&copy; made by vgihan</a>
    </footer>`;
  }
  setEvent() {
    const $anchors = this.$parent.querySelectorAll("header > nav > a");
    const $article = this.$parent.querySelector("article");

    new Router($article, { path: location.pathname });

    $anchors.forEach(($anchor) => {
      $anchor.addEventListener("click", (e) => {
        e.preventDefault();
        history.pushState({}, "", e.currentTarget.href);
        new Router($article, { path: location.pathname });
      });
    });
  }
}

export default App;
