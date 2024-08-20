import { Avatar, BlockCard, BlueCard, Tab, Tabs } from "@challenge.day/uikit";
import * as Styled from "./components/main-page-module.styled";
import { actionsCardsData } from "./data/data";
import { useEffect, useMemo, useState } from "react";
import MainContentModule from "./main-content.module";
import TasksPage from "../../tasks/tasks.page";
import FriendsPage from "../../friends/friends.page";
import MiningPage from "../../mining/mining.page";
import { initInitData } from "@tma.js/sdk-react";
import { createUser, sendReferralInfo } from "../../../redux/services/servicesThunk";
import { useAppDispatch } from "../../../redux/hooks";
import NFTsPage from "../../nfts/nfts.page";

const challenge_referral_prefix = "challenged_";

const MainAppView = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const initData = useMemo(() => initInitData(), []);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (initData?.user) {
        // if (initData?.startParam?.includes(challenge_referral_prefix)) {
        //     const refNumber = initData?.startParam?.replace(challenge_referral_prefix, "");
        //     if (refNumber && isFinite(parseInt(refNumber))) {
                dispatch(
                    sendReferralInfo({
                        telegram_id: initData?.user?.id,
                        referrer_id: initData?.startParam ?? ''
                    }),
                );
            // }
        // }
      dispatch(
        createUser({
          username: initData?.user?.username ?? "",
          first_name: initData?.user?.firstName ?? "",
          last_name: initData?.user?.lastName ?? "",
          telegram_id: initData?.user?.id,
          language_code: initData?.user?.languageCode ?? "",
        }),
      );
    }
  }, [dispatch, initData?.user, initData?.startParam]);

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
            maxWidth: "100%",
            width: "100%",
            padding: "4px",
          }}
        >
          <Tabs onSingleTabPress={(index) => setActiveTabIndex(index ?? 0)} activeTabIndex={activeTabIndex}>
            <Tab>
              <span
                style={{
                  fontSize: "12px",
                  textTransform: "capitalize",
                  color: activeTabIndex === 0 ? "var(--white-100)" : "var(--gray-400)",
                  textWrap: "nowrap",
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
                  color: activeTabIndex === 1 ? "var(--white-100)" : "var(--gray-400)",
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
                  color: activeTabIndex === 2 ? "var(--white-100)" : "var(--gray-400)",
                  textWrap: "nowrap",
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
                  color: activeTabIndex === 3 ? "var(--white-100)" : "var(--gray-400)",
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
                  color: activeTabIndex === 4 ? "var(--white-100)" : "var(--gray-400)",
                  textWrap: "nowrap",
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
              padding: "20px",
              textAlign: "center",
            }}
          >
            {activeTabIndex === 0 && <MainContentModule />}
            {activeTabIndex === 1 && <MiningPage />}
            {activeTabIndex === 2 && <TasksPage />}
            {activeTabIndex === 3 && <NFTsPage />}
            {activeTabIndex === 4 && <FriendsPage />}
          </div>
        </BlueCard>
      </BlockCard>
    </Styled.ContentSection>
  );
};

export default MainAppView;
