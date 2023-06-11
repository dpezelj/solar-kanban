import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const TaskWrapper = styled.div`
  padding: 1rem 0.5rem;
  background-color: ${props => props.$isDragging ? "dodgerblue" : "#cacaca"};
  margin: .5rem 0;
`;

const TaskTitle = styled.p`
user-select: none;
`

export const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={`${task.id}`} index={index} key={task.content}>
      {(provided, snapshot) => (
        <>
        <TaskWrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          $isDragging={snapshot.isDragging}
        >
          <TaskTitle>{task.content}</TaskTitle>

        </TaskWrapper>
        {provided.placeholder}
        </>
      )}
    </Draggable>
  );
};
