import { Avatar, BlockCard } from "@challenge.day/uikit";
import * as Styled from "./components/main-page-module.styled";
import { actionsCardsData } from "./data/data";
import TabsModule from "./tabs.module";
import { ReactNode } from "react";

const MainPageModule = ({ children }: {children: ReactNode}) => {
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
                <TabsModule />
                {children}
            </BlockCard>
        </Styled.ContentSection>
    );
};

export default MainPageModule;
