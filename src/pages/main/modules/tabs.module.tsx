import { Tab, Tabs } from "@challenge.day/uikit";
import { useState } from "react";
import { Link } from "react-router-dom";

const TabsModule = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    return (
        <>
            <Tabs
                onSingleTabPress={(index) => setActiveTabIndex(index ?? 0)}
                activeTabIndex={activeTabIndex}
            >
                <Tab>
                    <Link to="/main">Main</Link>
                </Tab>
                <Tab>
                    <Link to="/mining">Mining CHL</Link>
                </Tab>
                <Tab>
                    <Link to="/tasks">Tasks</Link>
                </Tab>
                <Tab>
                    <Link to="/friends">Friends</Link>
                </Tab>
            </Tabs>
        </>
    );
};
export default TabsModule;
