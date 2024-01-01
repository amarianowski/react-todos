import Logo from "./Logo";
import Nav from "./Nav";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header
      className="border-bottom px-4 py-1 d-flex justify-content-between align-items-center"
      style={{ maxHeight: "7vh" }}
    >
      <div className="d-flex align-items-center gap-2">
        <Logo />
        <span className="vr mx-3"></span>
        <Nav />
      </div>
      <div className="d-flex align-items-center gap-3">
        <ThemeSwitch />
        <span>Adam Marianowski</span>
        <button className="btn btn-outline-danger">Sign out</button>
      </div>
    </header>
  );
}
