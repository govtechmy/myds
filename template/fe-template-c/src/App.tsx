import AppRoutes from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  );
}
export default App;
