import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function MainForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useTaskContext();

  const nextCycleType = getNextCycleType(state.currentCycle);
  const handleCreateNewTaskSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (!inputRef.current) return;
    const taskName = inputRef.current.value.trim();
    if (!taskName) return;
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({
      type: "START_TASK",
      payload: newTask,
    });
  };

  function handleStopTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch({
      type: "INTERRUPT_TASK",
    });
  }

  return (
    <form onSubmit={handleCreateNewTaskSubmit} className="form" action="">
      <div className="formRow">
        <DefaultInput
          type="text"
          id="myInput"
          labelText="my label"
          placeholder="See somethign"
          ref={inputRef}
          disabled={state.activeTask !== null}
        />
      </div>
      <div className="formRow">
        <p>Lorem ipsum dolor, sit amet</p>
      </div>
      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}
      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton
            type="submit"
            icon={<PlayCircleIcon />}
            color="green"
            aria-label={`Start ${nextCycleType} task`}
            title={`Start ${nextCycleType} task`}
            key="submitButton"
          />
        )}
        {!!state.activeTask && (
          <DefaultButton
            arial-label={`Stop currently task ${nextCycleType}`}
            title="Stop currently task"
            icon={<StopCircleIcon />}
            color="red"
            type="button"
            onClick={handleStopTask}
            key="stopButton"
          />
        )}
      </div>
    </form>
  );
}
