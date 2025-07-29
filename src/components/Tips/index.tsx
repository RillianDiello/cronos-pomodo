import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycleType = getNextCycleType(state.currentCycle);
  // tips for user
  const tipsForActiveTask = {
    workTime: <span>Stay focused for {state.config.workTime} minutes</span>,
    shortBreakTime: (
      <span>
        Time to take a short break for {state.config.shortBreakTime} minutes
      </span>
    ),
    longBreakTime: <span>Enjoy a longer break</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>The next work session is {state.config.workTime} minutes long</span>
    ),
    shortBreakTime: (
      <span>
        The next short break will last {state.config.shortBreakTime} minutes
      </span>
    ),
    longBreakTime: <span>The next session is a long break</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsForActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
