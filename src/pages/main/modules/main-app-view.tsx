import { Avatar, BlockCard, BlueCard, Tab, Tabs } from "@challenge.day/uikit";
import * as Styled from "./components/main-page-module.styled";
import { actionsCardsData } from "./data/data";
import { useMemo, useState } from "react";
import MainContentModule from "./main-content.module";
import TasksPage from "../../tasks/tasks.page";
import FriendsPage from "../../friends/friends.page";
import MiningPage from "../../mining/mining.page";
import { initInitData } from "@tma.js/sdk-react";

const MainAppView = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const initData = useMemo(() => initInitData(), []);

  return (
    <Styled.ContentSection>
      <BlockCard>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ width: "50px" }}>
            <Avatar src={initData?.user?.photoUrl ?? actionsCardsData[0].image} alt="w" isFullyRounded size="min" />
          </div>
          <div>
            <p style={{ color: "black" }}>{initData?.user?.username ?? "Name"}</p>
            <p style={{ color: "black" }}>10 days in Challenge</p>
          </div>
        </div>
        <div>
          <h1 style={{ color: "black" }}>Hello</h1>
          <h4 style={{ color: "black" }}>Great to see you again! 🌅😊 </h4>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "auto", maxWidth: "100%", width: "100%", padding: "4px"}}>
          <Tabs onSingleTabPress={(index) => setActiveTabIndex(index ?? 0)} activeTabIndex={activeTabIndex}>
            <Tab>
              <span
                style={{
                  fontSize: "12px",
                  textTransform: "capitalize",
                }}
              >
                main
              </span>
            </Tab>
            <Tab>
              <span
                style={{
                  fontSize: "12px",
                  textTransform: "capitalize",
                  textWrap: "nowrap",
                }}
              >
                mining CHL
              </span>
            </Tab>
            <Tab>
              <span
                style={{
                  fontSize: "12px",
                  textTransform: "capitalize",
                }}
              >
                tasks
              </span>
            </Tab>
            <Tab>
              <span
                style={{
                  fontSize: "12px",
                  textTransform: "capitalize",
                  textWrap: "nowrap",
                }}
              >
                buy NFT
              </span>
            </Tab>
            <Tab>
              <span
                style={{
                  fontSize: "12px",
                  textTransform: "capitalize",
                }}
              >
                friends
              </span>
            </Tab>
          </Tabs>
        </div>
        <BlueCard>
          <div
            style={{
              width: "100%",
              padding: "8px",
              textAlign: "center",
            }}
          >
            {activeTabIndex === 0 && <MainContentModule />}
            {activeTabIndex === 1 && <MiningPage />}
            {activeTabIndex === 2 && <TasksPage />}
            {activeTabIndex === 4 && <FriendsPage />}
          </div>
        </BlueCard>
      </BlockCard>
    </Styled.ContentSection>
  );
};

export default MainAppView;
