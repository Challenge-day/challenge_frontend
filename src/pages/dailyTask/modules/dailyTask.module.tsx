import { Container, TasksList } from "./components/DailyTaskModule/daily-task.styled";

import { dailyTasksList } from "../modules/data/data";
import TaskItem from "../modules/dailyTaskItem.module";

const DailyTaskModule: React.FC = () => {
  return (
    <Container>
      <TasksList>
        {dailyTasksList.map(({ title, count }, index) => (
          <TaskItem key={index} title={title} count={count} />
        ))}
      </TasksList>
    </Container>
  );
};

export default DailyTaskModule;
