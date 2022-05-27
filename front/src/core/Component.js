export class Component {
  state;
  props;
  $parent;
  constructor($parent, props) {
    this.$parent = $parent;
    this.props = props;
    this.setup();
    this.render();
    this.componentDidMount();
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
  componentDidMount() {}
}

export default Component;
