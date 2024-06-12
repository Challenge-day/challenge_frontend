import { Route, Routes } from "react-router-dom";
import Layout from "./shared/Layout/Layout";
import WelcomePage from "./pages/welcome/welcome.page";
import FriendsPage from "./pages/friends/friends.page";
import TasksPage from "./pages/tasks/tasks.page";
import MiningPage from "./pages/mining/mining.page";
import MainContentModule from "./pages/main/modules/main-content.module";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<WelcomePage />} />
                <Route path="/main" element={<MainContentModule />} />
                <Route path="/mining" element={<MiningPage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/friends" element={<FriendsPage />} />
            </Route>
        </Routes>
    );
}

export default App;
