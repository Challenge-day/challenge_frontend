import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./shared/Layout/Layout";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="friends" element={<div>friends</div>} />
      </Route>
    </Routes>
  );
}

export default App;
