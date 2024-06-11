import { CSSProperties } from "react";
import {
    TabFriendsSx,
    TabListSx,
    TabMainSx,
    TabMainingSx,
    TabTasksSx,
} from "../../components/Tabs/tabs-module.styled";

export interface actionTabs {
    label: string;
    value: string;
    sx: CSSProperties;
}
export const tabs: actionTabs[] = [
    { label: "Main", value: "1", sx: TabMainSx },
    { label: "Mining CHL", value: "2", sx: TabMainingSx },
    { label: "Tasks", value: "3", sx: TabTasksSx },
    { label: "Friends", value: "4", sx: TabFriendsSx },
];
