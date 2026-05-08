import Navigation from "./Navigation";

function Header() {
  return (
    <header>
      <div className="top-brand-bar">
        <span className="brand-name">
          Raja <span className="highlight">Hassan</span> Zafar
        </span>
        <span className="brand-tagline">Software Engineer · NY</span>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;