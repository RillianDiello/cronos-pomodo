import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";
import { TimeWorkerManager } from "../../workers/TimeWorkerManager";
import { TaskActionTypes } from "./TaskActions";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimeWorkerManager.getInstance();
  worker.onmessage = (event) => {
    const countDownSeconds = event.data;

    if (countDownSeconds <= 0) {
      dispatch({ type: TaskActionTypes.COMPLETE_TASK });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
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
