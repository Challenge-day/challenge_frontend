import * as Styled from "./components/TasksPageModule/tasks-page-module.styled";
import { tasksList } from "./data/data";
import TaskItem from "./task-item.module";

export default function TasksPageModule() {
  return (
    <Styled.Container>
      <Styled.TasksList>
        {tasksList.map(({ title, count, status }, index) => (
          <TaskItem key={index} title={title} count={count} status={status} />
        ))}
      </Styled.TasksList>
    </Styled.Container>
  );
}
