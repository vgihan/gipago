const Container = ({ title, children, footer }) => {
  return `<div class="container_title">
      <p>${title}</p>
    </div>
    <div class="container_content">
      ${children}
    </div>
    <div class="container_footer">
      ${footer}
    </div>`;
};

export default Container;
