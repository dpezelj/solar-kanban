import React,{  useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { StrictModeDroppable } from './StrictModeDroppable';
import { Task } from './Task';

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ededed;
  width: clamp(150px, 100%, 300px);
  padding: 0 1rem 1rem 1rem;
`;
const ColumnTitle = styled.h3`
  text-transform: uppercase;
  user-select: none;
`;

const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 200px;
  background: ${props => props.$isDraggingOver ? "brown" : "#ededed"};
  transition: background-color 0.2s ease;
`;

const InnerList = React.memo(({ tasks }) => {
  const prevTasks = useRef(tasks)

  useEffect(() => {
    prevTasks.current = tasks;
  }, [tasks])

  return tasks.map((task, index) => (
    <Task task={task} index={index} key={task.id} />
    ))
}) 

export const Column = ({ column, tasks }) => {
    return (
        <ColumnWrapper>
          <ColumnTitle>{column.title.toString()}</ColumnTitle>
          
          <StrictModeDroppable droppableId={`${column.id}`}>
            {(provided, snapshot) => (
              <TasksWrapper ref={provided.innerRef} $isDraggingOver={snapshot.isDraggingOver} {...provided.droppableProps}>
                <InnerList tasks={tasks} />
                {provided.placeholder}
              </TasksWrapper>
            )}
          </StrictModeDroppable>
        </ColumnWrapper>
      );
}
