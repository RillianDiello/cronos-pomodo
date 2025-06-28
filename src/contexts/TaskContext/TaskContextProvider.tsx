import { useEffect, useState } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, setState] = useState<TaskStateModel>(initialTaskState);

  useEffect(() => {
    console.log("TaskContextProvider state updated:", state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
};
