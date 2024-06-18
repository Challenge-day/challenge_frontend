import { Icon } from "../../../shared/Icon/Icon";
import * as Styled from "./components/TaskItem/task-item.styled";

interface TaskItemProps {
  title: string;
  count: string;
  status: string;
}

export default function TaskItem({ title, count, status }: TaskItemProps) {
  return (
    <Styled.TaskItem status={status}>
      <Styled.WrapperText>
        <Styled.TaskTitle>{title}</Styled.TaskTitle>
        <Styled.TaskButton>
          <Icon width={15} height={15} iconId={"icon-arrow-go"} />
        </Styled.TaskButton>
      </Styled.WrapperText>
      {status && status !== "Success" ? (
        <Styled.TaskStatus>
          <Icon width={15} height={15} iconId={"icon-e-max"} /> {status}
        </Styled.TaskStatus>
      ) : (
        <Styled.TaskCount>
          <Icon width={15} height={15} iconId={"icon-e-max"} /> {count}
        </Styled.TaskCount>
      )}
    </Styled.TaskItem>
  );
}
