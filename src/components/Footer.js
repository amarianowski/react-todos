import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center py-3 my-4 border-top">
      <p className="text-body-secondary">2024 React-todos</p>

      <img src={logo} alt="" style={{ width: "2vw" }} />
    </footer>
  );
}
