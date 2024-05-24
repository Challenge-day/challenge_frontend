import { TabContext } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { BoxTabsSx, TabListSx } from "./TabsModule.styled";
import { actionTabs, tabs } from "../../data/dataTabs/data";
import MainContentModule from "../MainContentModule/MainContentModule";

const TabsModule = () => {
  const [value, setValue] = useState<string>("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box
          sx={BoxTabsSx}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={TabListSx}
          >
            {tabs?.map((tab: actionTabs) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
                sx={tab.sx}
              />
            ))}
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: "0" }}>
          <MainContentModule />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: "0" }}>
          <p style={{ color: "black" }}>tabs2</p>
        </TabPanel>
        <TabPanel value="3" sx={{ padding: "0" }}>
          <p style={{ color: "black" }}>tabs3</p>
        </TabPanel>
        <TabPanel value="4" sx={{ padding: "0" }}>
          <p style={{ color: "black" }}>tabs4</p>
        </TabPanel>
      </TabContext>
    </>
  );
};
export default TabsModule;
