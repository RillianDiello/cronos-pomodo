import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContext = {
  state: initialTaskState,
  setState: () => {}, // Default function that does nothing
};
export const TaskContext = createContext<TaskContextProps>(initialContext);
