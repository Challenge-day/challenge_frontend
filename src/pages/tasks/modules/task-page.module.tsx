import { useState } from "react";
import * as Styled from "./components/TasksPageModule/tasks-page-module.styled";
import { tasksList } from "./data/data";
import TaskItem from "./task-item.module";
import OpenOverlay from "../../modal/modules/OpenOverlayPending.module";
import { useDispatch } from "react-redux";
import { selectLoading, selectTask } from "../../../redux/task/selectors";
import { useSelector } from "react-redux";
import { selectError } from "../../../redux/services/servicesSlice";

const TaskPageModule: React.FC = () => {
  const dispatch = useDispatch();
  const task = useSelector(selectTask);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error....</p>;
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
