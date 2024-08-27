import { useState } from "react";
import * as Styled from "./components/TasksPageModule/tasks-page-module.styled";
import { tasksList } from "./data/data";
import TaskItem from "./task-item.module";
import OpenOverlay from "../../modal/modules/OpenOverlayPending.module";

const TaskPageModule: React.FC = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const handleTaskClick = (title: string, status: string) => {
    console.log(`Clicked on task with status: ${status}`);

    if (status === "Pending") {
      setSelectedTask(title);
      setIsOverlayOpen(true);
    }
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedTask(null);
  };
  return (
    <Styled.Container>
      <Styled.TasksList>
        {tasksList.map(({ title, count, status }, index) => (
          <TaskItem
            key={index}
            title={title}
            count={count}
            status={status}
            onClick={() => handleTaskClick(title, status)}
          />
        ))}
      </Styled.TasksList>
      {isOverlayOpen && <OpenOverlay onClose={handleCloseOverlay} />}
    </Styled.Container>
  );
};

export default TaskPageModule;
