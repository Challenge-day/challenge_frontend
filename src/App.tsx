import MainPage from "./pages/main/main.page";
import { Route, Routes } from "react-router-dom";
import Layout from "./shared/Layout/Layout";
import WelcomePage from "./pages/welcome/welcome.page";
import FriendsPage from "./pages/friends/friends.page";
import TasksPage from "./pages/tasks/tasks.page";
import MiningPage from "./pages/mining/mining.page";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<WelcomePage />} />
                <Route path="main" element={<MainPage />} />
                <Route path="friends" element={<FriendsPage />} />
                <Route path="tasks" element={<TasksPage />} />
                <Route path="mining" element={<MiningPage />} />
            </Route>
        </Routes>
    );
}

export default App;
