import { Route, Routes, Router } from "react-router-dom";
import Layout from "./shared/Layout/Layout";
import WelcomePage from "./pages/welcome/welcome.page";
import MainPage from "./pages/main/main.page";

import { useEffect, useMemo } from "react";
import { initNavigator } from "@tma.js/sdk-react";
import { useIntegration } from "@tma.js/react-router-integration";

function App() {
  const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
  const [location, reactNav] = useIntegration(navigator as any);

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  return (
    <Router location={location} navigator={reactNav}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/main" element={<MainPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
