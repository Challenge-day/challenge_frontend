import { tasksList } from "../../data/data";
import TaskItem from "../TaskItem/TaskItem";
import * as Styled from "./TasksPageModule.styled";

export default function TasksPageModule() {
    return (
        <Styled.Container>
            <Styled.TasksList>
                {tasksList.map(({ title, count, status }, index) => (
                    <TaskItem
                        key={index}
                        title={title}
                        count={count}
                        status={status}
                    />
                ))}
            </Styled.TasksList>
        </Styled.Container>
    );
}
