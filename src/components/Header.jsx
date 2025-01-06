import Navigation from "./Navigation"; // Keep Navigation component

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#FFFF00", width: "100%" }}
      >
        <div className="container-fluid">
          <div className="navbar-brand">
            <a
              className="navbar-item"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/HassanZafar-2021"
            >
              <span className="content is-large" style={{ color: "#000000" }}>
                Raja Hassan Zafar
              </span>
            </a>
          </div>
        </div>
      </nav>
      <Navigation />
    </div>
  );
}
export default Header;
