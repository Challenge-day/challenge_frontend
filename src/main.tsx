import ReactDOM from "react-dom/client";
import store, { persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SDKProvider as TMAReactSDKProvider } from "@tma.js/sdk-react";

import App from "./App";

import "./mockTGEnv";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={"Loader"}>
      <TMAReactSDKProvider acceptCustomStyles debug>
        <App />
      </TMAReactSDKProvider>
    </PersistGate>
  </Provider>,
);
