import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionModel } from "./TaskActions";

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContext = {
  state: initialTaskState,
  dispatch: () => {}, // Default function that does nothing
};
export const TaskContext = createContext<TaskContextProps>(initialContext);
