import {
  DailyTaskItem,
  CheckListImg,
  TextCountWrapper,
  Text,
  CountWrapper,
  Count,
} from "./components/DailyTaskItem/daily-task-item.styled";

import checkListImg from "../images/image.png";
import { Icon } from "../../../shared/Icon/Icon";
import { useNavigate } from "react-router-dom";

interface TaskItemProps {
  title: string;
  count: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, count }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Page Daily Task Information should be there
    navigate("/");
  };

  return (
    <DailyTaskItem>
      <CheckListImg src={checkListImg} alt="check list" />
      <TextCountWrapper>
        <Text>{title}</Text>
        <CountWrapper>
          <Icon width={10} height={10} iconId={"icon-e-min"} />
          <Count>{count}</Count>
        </CountWrapper>
      </TextCountWrapper>
      <button onClick={handleNavigate}>
        <Icon width={25} height={25} iconId={"icon-chevron-down"} />
      </button>
    </DailyTaskItem>
  );
};

export default TaskItem;
