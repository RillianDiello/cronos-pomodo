import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinuts";
import { getNextCycle } from "../../utils/getNextCycle";
import type { TaskActionModel } from "./TaskActions";

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel
): TaskStateModel {
  switch (action.type) {
    case "START_TASK": {
      const newTAsk = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = 60 * newTAsk.duration; // Convert minutes to seconds

      return {
        ...state,
        activeTask: newTAsk,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTAsk],
      };
    }
    case "INTERRUPT_TASK": {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: state.tasks.map((task) => {
          if (task.id === state.activeTask?.id) {
            return {
              ...task,
              interruptDate: Date.now(),
            };
          }
          return task;
        }),
      };
    }
    case "COMPLETE_TASK": {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: state.tasks.map((task) => {
          if (task.id === state.activeTask?.id) {
            return {
              ...task,
              completeDate: Date.now(),
            };
          }
          return task;
        }),
      };
    }
    case "RESET_STATE": {
      return state;
    }
    case "COUNT_DOWN": {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(
          action.payload.secondsRemaining
        ),
      };
    }
    default:
      return state;
  }
}
