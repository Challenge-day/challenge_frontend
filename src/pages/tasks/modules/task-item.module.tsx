import { Icon } from "../../../shared/Icon/Icon";
import * as Styled from "./components/TaskItem/task-item.styled";

interface TaskItemProps {
  title: string;
  count: string;
  status: string;
  onClick: () => void;
}

export default function TaskItem({ title, count, status, onClick }: TaskItemProps) {
  return (
    <Styled.TaskItem status={status} onClick={onClick}>
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
