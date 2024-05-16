import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./shared/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="main" element={<MainPage />} />
        <Route path="friends" element={<div>friends</div>} />
      </Route>
    </Routes>
  );
}

export default App;
