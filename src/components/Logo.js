import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <h1 onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
      <img src={logo} alt="" style={{ width: "2vw" }} />
    </h1>
  );
}
