import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponente from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  // const changeStete = (id) => {
  //   console.log("TODO: cambiar estado de una tarea");
  // };

  return (
    <div>
      <div>Your Task:</div>
      {/* Aplicar un for o un Map para renderizar una lista de tareas*/}
      {/* props tarea: */}
      <TaskComponente task={defaultTask}></TaskComponente>
    </div>
  );
};

export default TaskListComponent;
