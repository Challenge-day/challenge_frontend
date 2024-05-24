import dailyTasksImage from "../images/daily_tasks.webp";
import miningImage from "../images/mining.webp";

export interface ActionCard {
  title: string;
  image: string;
  navigateTo: string;
  bgColor: string;
  gridArea: string;
}

export const actionsCardsData: ActionCard[] = [
  {
    title: "Daily tasks",
    image: dailyTasksImage,
    navigateTo: "/daily-tasks",
    bgColor: "var(--content-bg)",
    gridArea: "daily",
  },
  {
    title: "Mining CLN",
    image: miningImage,
    navigateTo: "/mining",
    bgColor: "var(--yellow)",
    gridArea: "mining",
  },
];
