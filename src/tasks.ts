export const data = {
    tasks: {
        "task-1": {id: "task-1", content: "Test task 1"},
        "task-2": {id: "task-2", content: "Test task 2"},
        "task-3": {id: "task-3", content: "Test task 3"},
        "task-4": {id: "task-4", content: "Test task 4"},
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To do",
            taskIds: ["task-1", "task-2"]
        },
        "column-2": {
            id: "column-2",
            title: "In development",
            taskIds: ["task-3"]
        },
        "column-3": {
            id: "column-3",
            title: "Done",
            taskIds: ["task-4"]
        },
        columnOrder: ["column-1", "column-2", "column-3"]
    }
}