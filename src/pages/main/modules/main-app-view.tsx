import { Avatar, BlockCard, BlueCard, Tab, Tabs } from "@challenge.day/uikit";
import * as Styled from "./components/main-page-module.styled";
import { actionsCardsData } from "./data/data";
import { useState } from "react";
import MainContentModule from "./main-content.module";
import TasksPage from "../../tasks/tasks.page";
import FriendsPage from "../../friends/friends.page";
import MiningPage from "../../mining/mining.page";

const MainAppView = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    return (
        <Styled.ContentSection>
            <BlockCard>
                <div style={{ display: "flex", gap: "20px" }}>
                    <div style={{ width: "50px" }}>
                        <Avatar
                            src={actionsCardsData[0].image}
                            alt="w"
                            isFullyRounded
                            size="min"
                        />
                    </div>
                    <div>
                        <p style={{ color: "black" }}>NAME</p>
                        <p style={{ color: "black" }}>10 days in Challenge</p>
                    </div>
                </div>
                <div>
                    <h1 style={{ color: "black" }}>Hello</h1>
                    <h4 style={{ color: "black" }}>
                        Great to see you again! 🌅😊{" "}
                    </h4>
                </div>
                <Tabs
                    onSingleTabPress={(index) => setActiveTabIndex(index ?? 0)}
                    activeTabIndex={activeTabIndex}
                >
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
                            }}
                        >
                            friends
                        </span>
                    </Tab>
                </Tabs>
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
                        {activeTabIndex === 3 && <FriendsPage />}
                    </div>
                </BlueCard>
            </BlockCard>
        </Styled.ContentSection>
    );
};

export default MainAppView;