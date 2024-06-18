import { Route, Routes } from "react-router-dom";
import Layout from "./shared/Layout/Layout";
import WelcomePage from "./pages/welcome/welcome.page";
import MainPage from "./pages/main/main.page";

import { useTelegram } from './shared/hooks/useTelegram'
import { useEffect } from "react";

function App() {
    const {tg, user} = useTelegram()

    useEffect( () => {
        tg.ready()
        tg.expand()
        tg.MainButton.hide()
    }, [tg])

    console.log(user)

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
