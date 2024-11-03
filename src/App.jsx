import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
