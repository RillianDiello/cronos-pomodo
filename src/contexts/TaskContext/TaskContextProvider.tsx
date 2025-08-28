import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";
import { TimeWorkerManager } from "../../workers/TimeWorkerManager";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimeWorkerManager.getInstance();
  worker.onmessage = (event) => {
    const countDownSeconds = event.data;
    console.log(countDownSeconds);
    if (countDownSeconds <= 0) {
      console.log("Task completed or interrupted");
      worker.terminate();
    }
  };

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
    }
    worker.postmessage("acabou");
  }, [state, worker]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
