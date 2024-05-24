import * as Styled from "./MainPageModule.styled";
import { actionsCardsData } from "../data/data";

import TabsModule from "./Tabs/TabsModule";

const MainPageModule = () => {

  return (
    <Styled.ContentSection>
      <Styled.SectionContainer>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ width: "50px" }}>
            <img src={actionsCardsData[0].image} alt="w" height="50px" />
          </div>
          <div>
            <p style={{ color: "black" }}>NAME</p>
            <p style={{ color: "black" }}>10 days in Challenge</p>
          </div>
        </div>
        <div>
          <h1 style={{ color: "black" }}>Hello</h1>
          <h4 style={{ color: "black" }}>Great to see you again! 🌅😊 </h4>
        </div>
        <TabsModule />
      </Styled.SectionContainer>
    </Styled.ContentSection>
  );
};

export default MainPageModule;
