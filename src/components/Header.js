import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header
      className="border-bottom px-4 py-1 d-flex justify-content-between align-items-center"
      style={{ maxHeight: "7vh" }}
    >
      <h1>
        <img src={logo} alt="" style={{ width: "2vw" }} />
      </h1>
      <span>Adam Marianowski</span>
    </header>
  );
}
