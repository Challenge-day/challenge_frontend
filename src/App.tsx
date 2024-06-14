import { Route, Routes } from "react-router-dom";
import Layout from "./shared/Layout/Layout";
import WelcomePage from "./pages/welcome/welcome.page";
import MainPage from "./pages/main/main.page";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<WelcomePage />} />
                <Route path="/main" element={<MainPage />} />
            </Route>
        </Routes>
    );
}

export default App;
