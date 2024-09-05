import { Header } from "@challenge.day/uikit";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";

const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Header style={{ width: "100%" }}>
            <button style={{ background: "transparent", outline: "none", padding: "10px" }}>
              <span
                style={{
                  color: "#fafbfc",
                  textTransform: "capitalize",
                  fontFamily: "Montserrat",
                  fontSize: "11px",
                  fontWeight: 500,
                }}
              >
                cancel
              </span>
            </button>
            <span
              style={{
                color: "#fafbfc",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              challenge.day
            </span>
            <button
              style={{
                background: "transparent",
                outline: "none",
                padding: "10px",
                border: "1px solid #bcbfc6",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "30px",
                height: "30px",
                borderRadius: "100%",
              }}
            >
              <FiMoreHorizontal color="#bcbfc6" size={24} />
            </button>
          </Header> */}
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
