import { useState } from "react";

export const useHandleDragEnd = (data) => {
  const [columnItems, setColumnItems] = useState(data);

  const setRes = (res) => {
    const { destination, source, draggableId } = res;

    if (!destination) {
      console.log("!destination");
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      console.log("des === source");
      return;
    }

    const { columns } = columnItems;

    const startColumn = columns[source.droppableId];

    const endColumn = columns[destination.droppableId];

    if (startColumn === endColumn) {
      const newTaskIds = [...startColumn.taskIds];
      const [removedTask] = newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, removedTask);

      const newData = {
        ...columnItems,
        columns: {
          ...columnItems.columns,
          [startColumn.id]: {
            ...startColumn,
            taskIds: newTaskIds,
          },
        },
      };

      console.log("NEW DATA", newData);
      setColumnItems(newData);
    }

    if (startColumn !== endColumn) {
      const newStart = {
        ...startColumn,
        taskIds: [
          ...startColumn.taskIds.slice(0, source.index),
          ...startColumn.taskIds.slice(source.index + 1),
        ],
      };

      const newEnd = {
        ...endColumn,
        taskIds: [
          ...endColumn.taskIds.slice(0, destination.index),
          draggableId,
          ...endColumn.taskIds.slice(destination.index),
        ],
      };

      const newData = {
        ...columnItems,
        columns: {
          ...columnItems.columns,
          [newStart.id]: newStart,
          [newEnd.id]: newEnd,
        },
      };

      setColumnItems(newData);
    }
  };

  return { columnItems, setRes };
};
