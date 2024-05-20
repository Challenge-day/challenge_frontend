import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./shared/Layout/Layout";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import TasksPage from "./pages/TasksPage/TasksPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Route>
    </Routes>
  );
}

export default App;
