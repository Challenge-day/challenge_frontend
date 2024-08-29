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
  const [selectedStatus, setSelectedStatus] = useState<"Pending" | "Canceled" | null>(null);

  const handleTaskClick = (status: "Pending" | "Canceled") => {
    console.log(`Clicked on task with status: ${status}`);

    if (status === "Pending" || status === "Canceled") {
      setSelectedStatus(status);
      setIsOverlayOpen(true);
    }
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedStatus(null);
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
            onClick={() => handleTaskClick((status as "Pending") || "Canceled")}
          />
        ))}
      </Styled.TasksList>
      {isOverlayOpen && selectedStatus && <OpenOverlay status={selectedStatus} onClose={handleCloseOverlay} />}
    </Styled.Container>
  );
};

export default TaskPageModule;
