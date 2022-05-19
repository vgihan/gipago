export class Component {
  state;
  props;
  $parent;
  constructor($parent, props) {
    this.$parent = $parent;
    this.props = props;
    this.setup();
    this.render();
  }
  setup() {}
  render() {
    this.$parent.innerHTML = this.template();
    this.setEvent();
    this.mounted();
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  mounted() {}
  setEvent() {}
  template() {}
}

export default Component;
