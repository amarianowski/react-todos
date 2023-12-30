import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Todos from "./pages/Todos";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="d-flex" style={{ minHeight: "93vh", height: "100%" }}>
        <Sidenav />
        <main className="p-4 w-100">
          <Todos />
        </main>
      </div>
    </div>
  );
}
