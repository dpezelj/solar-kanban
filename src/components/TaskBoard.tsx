import { useState } from "react";

import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { useGetTasks } from "../hooks/useGetTasks";
import { Column } from "./Column";
import { useHandleDragEnd } from "../hooks/useHandleDragEnd";

const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  background: dodgerblue;
`;

export const TaskBoard = () => {
  
const { data } = useGetTasks();

  const {columnItems, setRes} = useHandleDragEnd(data)

  const handleDragEnd = (res) => {
    setRes(res);
  };

  return (
    <ColumnsWrapper>
      <DragDropContext onDragEnd={handleDragEnd}>
        {columnItems.columns.columnOrder.map(
          (columnId: string) => {
            const column = columnItems.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId) => columnItems.tasks[taskId]
            );

            return (
              <Column column={column} tasks={tasks} key={`${column.id}`} />
            );
          }
        )}
      </DragDropContext>
    </ColumnsWrapper>
  );
};
